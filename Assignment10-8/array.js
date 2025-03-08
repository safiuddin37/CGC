const arr = [];
const addele = () => {
  newel = 0;
  newel = document.getElementById("num");
  newelno = newel.value;
  console.log(newelno);
  arr.push(newelno)
  console.log(arr)
  newel.value="";
};
const dispele =() =>{
    display = document.getElementById("disp");
    for(i=0;i<arr.length;i++){
        display.innerHTML+=`<p>Element${i}=${arr[i]}</p>`
    }
}
