function checkYourName(name){
    if(name.length >= 2 && name.length <=30 && /^[a-zA-Z -]+$/.test(name))
        return true;
    else return false;
}

function checkAge(age){
    if(age >= 18 && age <= 130 )
        return true;
    else return false;
}

function checkEmail(email){
    if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))
        return true;
    else return false;
}

function checkYourWebsite(websiteURL){
    if(websiteURL == "" || /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/.test(websiteURL))
        return true;
    else return false;
    }

function checkYourMessage(messageText){
    if(messageText.length >= 10 && messageText.length <=350)
        return true;
    else return false;
}

const fields = document.querySelectorAll("#contactform ol li .text");
const messageBox = document.querySelector("#contactform ol li #message");

document.querySelector('.send').addEventListener("click", (e) => {
    e.preventDefault();
    
    document.querySelectorAll('#fieldError').forEach(e => e.remove()); //очищення вікна від попередніх помилок


    fields.forEach(e => e.style.borderColor = "black");
    
    //check fields
    if (!checkYourName(fields[0].value))
        createErrorElement("Довжина повинна бути мінімум два символи, максимум 30, використовуючи лише символи алфавіту, дефіс та пробіл!", fields[0])
    
    if(!checkAge(fields[2].value))
        createErrorElement("Повинно бути число в діапазоні від 18 до 130!", fields[2]);

    if(!checkEmail(fields[1].value))
        createErrorElement("E-mail некоректний!", fields[1]);

    if(!checkYourWebsite(fields[3].value))
        createErrorElement("Ваш веб-сайт введено невірно", fields[3]);

    if(!checkYourMessage(messageBox.value))
        createErrorElement("Повідомлення повинно складатись з символів кількістю від 10 до 350!", messageBox);

});

function createErrorElement(errorText, errorInputObj){
    errorInputObj.style.borderColor = "red";

    let div_block = document.createElement("div");
    div_block.id = "fieldError";
    div_block.textContent = "Помилка: " + errorText;
    
    
    errorInputObj.parentNode.append(div_block);


}

function focusedInputEvent(event){
    event.currentTarget.style.borderColor = "#666";
    let error = event.currentTarget.parentNode.querySelector("#fieldError")
    if (error) error.remove();  
}

fields.forEach(e => e.addEventListener("focus", focusedInputEvent));
messageBox.addEventListener("focus", focusedInputEvent);

