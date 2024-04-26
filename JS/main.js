let output = document.getElementById("output-screen");
let input = document.querySelectorAll(".inputNumber").values;

function display(num){
    output.value += num;
}

function Calculate(){
        output.value = eval(output.value);
}

function Clear(){
    output.value = "";
}

function Del(){
    output.value = output.value.slice(0,-1);
}