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
          newListElement.appendChild(divElement);
            
            imgElement.src = "images/icon-check.svg"; 
          //IMAGE CHECK ELEMENT
            newListElement.appendChild(divElement).style.width = "15px";
            newListElement.appendChild(divElement).style.height = "15px";
            newListElement.appendChild(divElement).style.marginRight = "10px";
            newListElement.appendChild(divElement).style.backgroundColor = "red";
            newListElement.appendChild(divElement).style.borderWidth = "40px"
            newListElement.appendChild(divElement).style.borderColor = "#47495e";
            
            
            
            
           
           
            //TEXT
            
            //LIST ELEMENTS
            newListElement.appendChild(textNode);
            
            todoList.appendChild(newListElement).style.padding = "25px";
            todoList.appendChild(newListElement).style.borderBottom = "solid";
            todoList.appendChild(newListElement).style.display = "flex";
            todoList.appendChild(newListElement).style.backgroundColor = "#25273c";
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

let markTask = 1;
 function completeTask() {
  if(markTask === 2){
    console.log("1a");
    return;
  }
  else{
    this.style.textDecoration = "line-through";
    this.style.color = "#47495e"
    markTask =1;
    console.log("2a");
  }

  if(markTask === 1){
    console.log("1b");
    return;
  }else{
    this.style.textDecoration = "none";
    this.style.color = "white"
    markTask =2;
    console.log("2b");
  }
      console.log(markTask);
}

    
//RESERVE THIS CODE
  /*  if (toggleColor === 1) {
      this.style.textDecoration = "line-through";
      this.style.color = "#47495e"
      this.toggleColor =2;
    }else if(toggleColor ===2){
      
      console.log("hola");
     
    }
     else {
      this.style.textDecoration = "none";
      this.style.color = "white"
    }
    toggleColor = !toggleColor;*/