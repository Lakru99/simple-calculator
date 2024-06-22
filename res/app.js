function calc() {
    let number1 = "";
    let number2 = "";
    let op = "";
    number1 =  new Number(document.getElementById("number1").value);
    number2 =  new Number(document.getElementById("number2").value);
    op = document.getElementById("op").value;
    let lblOutput = document.getElementById("label");

    switch (op) {
        case "+":
            lblOutput.innerHTML=(number1 +   number2);
            break;

        case "-":
            lblOutput.innerHTML=(number1 -  number2);
            break;

        case "/" :
            lblOutput.innerHTML=(number1 /  number2);
            break;

        case "*" :
            lblOutput.innerHTML=(number1 * number2);
            break;
    
        default:
            break;
    }
}


function num9Click() {
    document.getElementById("number1").value=9;
}
function num8Click() {
    document.getElementById("number1").value=8;
}