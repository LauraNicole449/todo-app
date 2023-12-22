function addTodoList(){
    if (event.key === "Enter") {
        const inputValue = document.getElementById("createTodo").value;
        const newListElement = document.createElement("li");
        const textNode = document.createTextNode(inputValue);
        if(inputValue === ""){
            return inputValue;
        }else{
            const imgElement = document.createElement("img");
            imgElement.src = "images/icon-check.svg"; 
            newListElement.appendChild(imgElement);
            const textNode = document.createTextNode(inputValue);
            newListElement.appendChild(textNode);
            const todoList = document.getElementById("listTodo");
            todoList.appendChild(newListElement);
            document.getElementById("createTodo").value = "";
        }
        
        console.log("assa");
    }
}

