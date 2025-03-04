// http://randomuser.me/api?results=50
const result = document.getElementById("result")
const filter = document.getElementById("filter");
const listitems = [];
const getdata = async() =>{
    try{
        const res =await fetch("http://randomuser.me/api?results=50")
        let { results }= await res.json();
        result.innerHTML="";
        results.forEach(user=> {
            const li = document.createElement("li");
            listitems.push(li);
            li.innerHTML=`
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
            `            
            result.appendChild(li)
        });
    }catch(e){
        console.log(e);
    }
}
getdata();
filter.addEventListener("input",(e)=>{
    filterdata(e.target.value);
})
function filterdata(searchel){
    listitems.forEach(el=>{
        if(el.innerText.toLowerCase().includes(searchel.toLowerCase())) {
            el.classList.remove('hide')
        } else {
            el.classList.add('hide')
        }
    })
}