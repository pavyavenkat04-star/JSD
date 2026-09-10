// Task class
class Task {

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

}


// TaskManager class
class TaskManager {

    constructor() {
        // Array to store all tasks
        this.tasks = [];

        // Starting ID
        this.nextId = 1;
    }


    // Add a new task
    addTask(title, description) {

        // Create a new Task object
        const task = new Task(
            this.nextId,
            title,
            description
        );

        // Store task in the array
        this.tasks.push(task);

        // Increase ID for the next task
        this.nextId++;

        // Display updated task list
        this.displayTasks();
    }


    // Delete a task
    deleteTask(taskId) {

        // Remove task using its ID
        this.tasks = this.tasks.filter(
            task => task.id !== taskId
        );

        // Display updated task list
        this.displayTasks();
    }


    // Display all tasks
    displayTasks() {

        const taskList = document.getElementById("taskList");

        // Clear existing tasks
        taskList.innerHTML = "";

        // Show message if there are no tasks
        if (this.tasks.length === 0) {

            taskList.innerHTML =
                '<p class="empty-message">No tasks available.</p>';

            return;
        }

        // Loop through the task array
        for (let i = 0; i < this.tasks.length; i++) {

            const task = this.tasks[i];

            // Create task card
            const taskCard = document.createElement("div");

            taskCard.className = "task-card";

            taskCard.innerHTML = `
                <h3>${task.title}</h3>

                <p>
                    <strong>Task ID:</strong>
                    ${task.id}
                </p>

                <p>
                    <strong>Description:</strong>
                    ${task.description}
                </p>

                <button
                    class="delete-button"
                    onclick="deleteTask(${task.id})">
                    Delete
                </button>
            `;

            // Add card to task list
            taskList.appendChild(taskCard);
        }
    }
}


// Create TaskManager object
const taskManager = new TaskManager();


// Function to add task from the form
function addNewTask() {

    // Get values from input fields
    const title =
        document.getElementById("taskTitle").value.trim();

    const description =
        document.getElementById("taskDescription").value.trim();


    // Validate input
    if (title === "" || description === "") {

        alert("Please enter both title and description.");

        return;
    }


    // Add task
    taskManager.addTask(title, description);


    // Clear input fields
    document.getElementById("taskTitle").value = "";

    document.getElementById("taskDescription").value = "";
}


// Function to delete task
function deleteTask(taskId) {

    taskManager.deleteTask(taskId);
}


// Display tasks when page loads
taskManager.displayTasks();