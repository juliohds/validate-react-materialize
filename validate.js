export function Validar() {

    let input = document.querySelectorAll('input[meValidate], .materialize-textarea');
    //let textarea = document.getElementsByClassName('materialize-textarea')

    //input = text.concat(textarea)
    let fail_submit = false;
    
    for (let i = 0; i < input.length; i++) {
        let valid = false;

        if(input[i].attributes[0].value == "text"){
            valid = ValidTextNull(input[i]);
        }
        else if(input[i].attributes[0].value == "url"){
            valid = ValidURL(input[i]);
        }
        else if(input[i].attributes[0].value == "text-url"){
            valid = ValidTextNull(input[i]);
            if(!valid){ 
                valid = ValidURL(input[i]);
            }
        }

        if(valid){
            fail_submit = true;
        }
        
    }

    
    return fail_submit;

}


export function EditLabelFields(){
    var labels = document.querySelectorAll("label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].classList.add("active");
    }
}
    
 

function ValidTextNull(input){

    let text_is_null = false;

    if(input.value == "" || input.value == null){
        text_is_null = true;
    }
    
    if(text_is_null){
        input.classList.add("validError");
        input.style.borderBottomColor = "red";
        input.placeholder = "Campo obrigatório não preenchido...";
        input.focus();
    }

    return text_is_null;
}

function ValidURL(input) {

    let url_is_ok = true;
    let valor = input.value; 

    let teste1 = valor.indexOf(" ");
    
    if(teste1 != -1){
        url_is_ok = false;
    }
    let teste2 = valor.indexOf(".");
    if(teste2 == -1){
        url_is_ok = false;
    }
    
    if(!url_is_ok){
        input.value = "";
        input.classList.add("validError");
        input.style.borderBottomColor = "red";
        input.placeholder = "Campo de url preenchido incorretamente...";
        input.focus();
    }

    return url_is_ok;
}

