function clear(text, Input){
    text = "";
    Input.value = text
}

function chameOnClick(operado) {
    let textInput = document.getElementsByName("input-cal")[0];
    let text =  textInput.value
    if (operado != "C" && operado != "="){
        if (text.length === 0 || !isNaN(text[text.length - 1])) {
            if (text.length === 0 && operado == "0"){
                clear()
            } else {
                text += operado;
                textInput.value = text
            }
        } else if (isNaN(text[text.length - 1]) && !isNaN(operado) && text.length !== 0) {
            text += operado;
            textInput.value = text
        } 
    }  else if (operado === "="){
        try { 
            if (operado == "0"){
                textInput.value = "0"
            }
            textInput.value = eval(text);
        } catch (e) {
            alert("Erro ao calcular valor... Digite um valor válido.");
            clear(text, textInput)
        }
    } else {
        clear(text, textInput)
    } 
}




