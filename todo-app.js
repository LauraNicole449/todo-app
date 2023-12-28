var taskId = 1;
function addTodoList(){
    
    const inputValue = document.getElementById("createTodo").value;
    const newListElement = document.createElement("li");
    const textNode = document.createTextNode(inputValue);
    const imgCross = document.createElement("img");
    const checkElement = document.createElement("div");
    const todoList = document.getElementById("listTodo");
    if (event.key === "Enter") {
        
        if(inputValue === ""){
            return inputValue;
        }else{
          
            
            imgCross.src = "images/icon-cross.svg"; 
          //IMAGE CHECK ELEMENT
            newListElement.appendChild(checkElement).style.width = "15px";
            newListElement.appendChild(checkElement).style.height = "15px";
            newListElement.appendChild(checkElement).style.marginRight = "10px";
            newListElement.appendChild(checkElement).style.borderRadius = "100%";
            newListElement.appendChild(checkElement).style.backgroundColor = "#25273c";
            newListElement.appendChild(checkElement).style.borderWidth = "0.5px"
            newListElement.appendChild(checkElement).style.borderColor = "#47495e";
            newListElement.appendChild(checkElement).style.borderStyle = "solid";

            
            
            
            
            
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

            //IMAGE CROSS
            newListElement.appendChild(imgCross);
            newListElement.appendChild(imgCross).onclick = deleteTask;



            document.getElementById("createTodo").value = "";
        }
        console.log(taskId);
        taskId = taskId+1;
        function completeTask() {
          if(!this.dataset.completed){
            
            
            this.style.textDecoration = "line-through";
            this.style.color = "#47495e";
            this.appendChild(checkElement).style.backgroundColor = "white";
            this.appendChild(textNode);
            newListElement.appendChild(imgCross);
            this.dataset.completed = true;
          } else {
            
            this.appendChild(textNode);this.style.textDecoration = "none";
            this.style.color = "white";
            this.appendChild(checkElement).style.backgroundColor = "#25273c";
            this.appendChild(textNode);
            newListElement.appendChild(imgCross);
            delete this.dataset.completed;
          }
        }

        function deleteTask(){
          var idList = event.target.id;
          document.getElementById(idList).remove();
          console.log("imagen");
          
        }

        console.log("assa");
    }
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