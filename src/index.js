document.addEventListener("DOMContentLoaded", () => {
  // Select the form and tasks list
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add submit event listener to the form
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input value
    const taskDescription = document.getElementById("new-task-description").value;

    // Create a new list item with the task description
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById("new-task-description").value = "";
  });
});