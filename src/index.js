document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector("#create-task-form")
   const tasklist = document.querySelector("#tasks")
  taskForm.addEventListener("submit", function(c){
       c.preventDefault()
      const newTask = document.querySelector("#new-task-description").value
     const taskItem = document.createElement("li")
     taskItem.innerText = newTask

     tasklist.appendChild(taskItem)
     taskForm.reset()

     
      
  })
  
});
