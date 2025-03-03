var btn = document.getElementById("Btn-container")
function changebgcolor(){
    rancolor =getRandomColor();
    document.body.style.backgroundColor = rancolor;
    function getRandomColor(){
        return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
}
var gradbtn = document.getElementById("Grad-container")
function gradcolor(){
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}
function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}