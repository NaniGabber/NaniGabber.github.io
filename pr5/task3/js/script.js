const body = document.querySelector("body");  

class Task{

    constructor(){
        this.elementsInit();
        this.elementsAppend();
        this.isSaved = false;
    }

    elementsInit(){
        this.input = document.createElement('input');
        this.input.className = "taskInput";
        this.input.placeholder = "Введіть сюди своє завдання!";
        this.inputConfig();
        
        this.button = document.createElement('button');
        this.button.className = "taskButton addButton"
        this.button.disabled = true;
        this.buttonConfig();
    }

    inputConfig(){
        this.input.addEventListener("focus", this.inputEvent);
        this.input.addEventListener("input", this.inputEvent);
    }

    elementsAppend(){
        this.fatherDiv = document.createElement('div');
        this.fatherDiv.className = "task"
        this.fatherDiv.append(this.input);
        this.fatherDiv.append(this.button);
        body.prepend(this.fatherDiv);

    }
    buttonConfig(){
        this.button.addEventListener("click", this.buttonClick);
    }

    inputEvent(event){
        let button = event.currentTarget.parentNode.querySelector(".taskButton");
        if(event.currentTarget.value == ""){
            button.disabled = true;
            button.style.cssText = "background-color:grey";
        }
        else{
            button.disabled = false;
            button.style.cssText = "background-color:rgba(0, 255, 34, 0.836);";
        }
    }

    buttonClick(event){
        let input = event.currentTarget.parentNode.querySelector(".taskInput");
        if(event.currentTarget.className.includes("addButton")){
            event.currentTarget.className = event.currentTarget.className.replace("addButton", "");
            event.currentTarget.className += "removeButton";
            event.currentTarget.style.cssText = "background-color:rgba(255, 0, 0, 0.836)"
            input.disabled = true;
            input.placeholder = "";
            let newTask = new Task();
        }
        else{
            input.style.textDecoration = "line-through red";
            body.append(event.currentTarget.parentNode);

            event.currentTarget.remove();
            delete this;
    }
}
}

let task = new Task();