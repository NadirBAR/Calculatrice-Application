let output = document.getElementById("output-screen");
let input = document.querySelectorAll(".inputNumber").values;

function display(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);
        pourcentage();
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}