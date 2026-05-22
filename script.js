let x = 1;
function divide(y){ 
    x = x / y
document.querySelector("h2").innerHTML = x;
}
function multiple(y){
    x = x * y; 
   document.querySelector("h2").innerHTML = x;
}
function add(y){
    x += y;
    document.querySelector("h2").innerHTML = x;
}
function cube(){
    x = x * x * x
    document.querySelector("h2").innerHTML = x;
}
function perc(y){
    x = (x/y) * 100
    document.querySelector("h2").innerHTML = x;
}
function clearC(){
    x = 1;
    document.querySelector("h2").innerHTML = x;
}