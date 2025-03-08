const addtask=()=> {
    let taskinput = document.getElementById("taskinput");
    let tasktext = taskinput.value;

    if (tasktext ===""){
        alert("enter appropriate task");
        return;
    }
    let tasklist = document.getElementById("tasklist");
    let li = document.createElement("li");
    li.textContent= tasktext;
    li.addEventListener("click",()=>{
        li.classList.toggle("completed");
    });
    tasklist.appendChild(li)
    let deletebtn = document.createElement("button");
    deletebtn.textContent="X";
    deletebtn.classList.add("deletebtn");
    deletebtn.addEventListener("click",() =>{
        tasklist.removeChild(li);
    });
    li.appendChild(deletebtn);
    taskinput.value="";
};
