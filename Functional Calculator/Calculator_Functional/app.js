function getValue(number){
console.log(number);
var inputdata = document.getElementById("inputdata");
inputdata.value += number;

}

function equalsto() {
    var inputdata = document.getElementById("inputdata");
    var result = eval(inputdata.value);
    console.log(result);
    inputdata.value = result;
}

function allclear() {
    var inputdata = document.getElementById("inputdata");
    inputdata.value = "";
}

function singleclear() {
    var inputdata = document.getElementById("inputdata");
    var singleclear = inputdata.value.slice(0 , -1);
    inputdata.value = singleclear 
}

