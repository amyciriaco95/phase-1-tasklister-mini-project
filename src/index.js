document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })

})

const list = document.getElementById('tasks')

function handleForm(task){
  const newTask = document.createElement('li')
  newTask.textContent = `${task}`

  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  newTask.appendChild(btn)

  list.append(newTask)
}
