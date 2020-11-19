var valores = "";


function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}

function addOperation(x) {
    switch (x) {
        case "C":
            valores = "";
            break;
        default:
            valores += x;
            break;
    }
    document.getElementById("resultados").value = valores;
}


function calculate() {
    valores = eval(valores);
    document.getElementById("resultados").value = valores;

}