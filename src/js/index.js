
let todos = [
    {
        "title": "Eat",
        "id": 1,
        "complete": false,
      },
      {
        "title": "Sleep",
        "id": 2,
        "complete": false,
      },
      {
        "title": "Code",
        "id": 3,
        "complete": false
      }
]

let containerDiv = document.querySelector('#todoContainer')
const displayTodos = (arr) => {
    arr.forEach(element => {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add('card')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = element.title
        cardBody.appendChild(cardTitle)
        
        const editBtn = document.createElement('a')
        editBtn.classList.add('card-link')
        editBtn.setAttribute('id', element.id)
        editBtn.innerHTML = 'Edit ToDo'
        cardBody.appendChild(editBtn)

        const completeBtn = document.createElement('a')
        completeBtn.classList.add('card-link')
        completeBtn.setAttribute('id', element.id)
        completeBtn.innerHTML = 'Complete ToDo'
        cardBody.appendChild(completeBtn)

        cardDiv.appendChild(cardBody)
        containerDiv.appendChild(cardDiv)
    });

}

displayTodos(todos)