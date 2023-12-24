var taskId = 1;
function addTodoList(){
    
    const inputValue = document.getElementById("createTodo").value;
    const newListElement = document.createElement("li");
    const textNode = document.createTextNode(inputValue);
    const imgElement = document.createElement("img");
    const divElement = document.createElement("div");
    const todoList = document.getElementById("listTodo");
    if (event.key === "Enter") {
        
        if(inputValue === ""){
            return inputValue;
        }else{
            
            
            imgElement.src = "images/icon-check.svg"; 
          //IMAGE CHECK ELEMENT
            newListElement.appendChild(divElement).style.width = "10px";
            newListElement.appendChild(divElement).style.height = "10px";
            newListElement.appendChild(divElement).style.marginRight = "10px";
            newListElement.appendChild(divElement).style.backgroundColor = "#a07ef5";
            
            newListElement.appendChild(divElement).style.borderRadius = "100%";
            
            
           
           
            //TEXT
            
            //LIST ELEMENTS
            newListElement.appendChild(textNode);
            
            todoList.appendChild(newListElement).style.padding = "25px";
            todoList.appendChild(newListElement).style.borderBottom = "solid";
            todoList.appendChild(newListElement).style.display = "flex";
            todoList.appendChild(newListElement).style.backgroundColor = "red";
            todoList.appendChild(newListElement).style.borderBottomWidth = "1px";
            todoList.appendChild(newListElement).style.borderBottomColor = "white";
            todoList.appendChild(newListElement).setAttribute("id", taskId);
            todoList.appendChild(newListElement).onclick = completeTask;

            todoList.appendChild(newListElement);

            document.getElementById("createTodo").value = "";
        }
        console.log(taskId);
        taskId = taskId+1;
        
        console.log("assa");
    }
    
}


 function completeTask(elemento) {
      if (elemento.style.backgroundColor === "red") {
        elemento.style.backgroundColor = "blue";
      } else {
        elemento.style.backgroundColor = "red";
      }
    }