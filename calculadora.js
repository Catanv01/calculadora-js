function calcular(){
    const valor1 = parseInt(document.getElementById("num1").value)
    const valor2 = parseInt(document.getElementById("num2").value)
    const operador = document.getElementById("operador").value
    let resultado = "RESULTADO: "

    if(operador == "+"){
        resultado = resultado + (valor1 + valor2)
    } else if(operador == "-"){
        resultado = resultado + (valor1 - valor2)
    } else if(operador == "*"){
        resultado = resultado + (valor1 * valor2)
    } else if(operador == "/"){
        if (valor2 === 0){
            resultado = "¡No se puede dividir por cero!"
        } else {
            resultado = resultado + (valor1 / valor2)
        }  
    } else if(operador === "**"){
        if (valor1 === 0 && valor2 === 0){
            resultado = "Indeterminado cuando la base y el exponente equivalen a 0"
        } else {
            resultado = resultado + (valor1 ** valor2)
        }
    } else if (operador === "%"){
        if (valor2 === 0){
            resultado = "¡No se puede dividir por cero!"
        } else {
            resultado = resultado + (valor1 % valor2)
        }  
    }
    else {
        resultado = "ERROR: Operador No Válido!"
    }
    document.getElementById("resultado").innerText = resultado
}