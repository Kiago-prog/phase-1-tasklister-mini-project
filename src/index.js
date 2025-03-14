document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.querySelector("#new-task-description");
    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;
      taskList.appendChild(newTask);

      // Clear the input field
      taskInput.value = "";
    }
  });
})
