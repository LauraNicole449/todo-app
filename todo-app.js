let taskId = 1 // use let declarion instead of

function addTodoList () {
  const inputValue = document.getElementById('createTodo').value
  const newListElement = document.createElement('li')
  const textNode = document.createTextNode(inputValue)
  const imgCross = document.createElement('img')
  const checkElement = document.createElement('div')
  const todoList = document.getElementById('listTodo')

  if (event.key === 'Enter') {
    if (inputValue === '') {
      return inputValue
    } else {
      imgCross.src = 'images/icon-cross.svg'

      //IMAGE CHECK ELEMENT
      newListElement.appendChild(checkElement)
      checkElement.classList.add('check-icon-styles')

      //LIST ELEMENTS
      newListElement.appendChild(textNode)
      todoList.appendChild(newListElement)
      newListElement.classList.add('new-list-styles')
      newListElement.setAttribute('id', taskId)
      newListElement.onclick = completeTask
      newListElement.onmouseover = addImgCross

      //IMAGE CROSS
      function addImgCross () {
        if (addImgCross) {
          newListElement.appendChild(imgCross)

          console.log('img cross added')
        } else {
          newListElement.appendChild(imgCross)
          console.log('img cross removed')
        }
      }

      document.getElementById('createTodo').value = ''
    }

    taskId = taskId + 1

    function completeTask () {
      if (!this.dataset.completed) {
        this.style.textDecoration = 'line-through'
        this.style.color = '#47495e'
        this.appendChild(checkElement).style.backgroundColor = 'white'
        this.appendChild(textNode)
        newListElement.appendChild(imgCross)
        this.dataset.completed = true
      } else {
        this.appendChild(textNode)
        this.style.textDecoration = 'none'
        this.style.color = 'white'
        this.appendChild(checkElement).style.backgroundColor = '#25273c'
        this.appendChild(textNode)
        newListElement.appendChild(imgCross)
        delete this.dataset.completed
      }
    }

    function deleteTask () {
      var idList = event.target.id
      document.getElementById(idList).remove()
      console.log('ekunuimagen')
    }

    console.log('assa')
  }
}
