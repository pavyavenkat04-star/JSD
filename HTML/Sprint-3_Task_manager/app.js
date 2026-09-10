// ==========================================
// TASK CLASS
// ==========================================

class Task {

    constructor(
        name,
        description,
        assignedTo,
        dueDate,
        status,
        id = Date.now()
    ) {

        this.id = id;

        this.name = name;

        this.description = description;

        this.assignedTo = assignedTo;

        this.dueDate = dueDate;

        this.status = status;
    }

    toJSON() {

        return {
            id: this.id,
            name: this.name,
            description: this.description,
            assignedTo: this.assignedTo,
            dueDate: this.dueDate,
            status: this.status
        };
    }
}


// ==========================================
// TASK MANAGER CLASS
// ==========================================

class TaskManager {

    constructor() {

        this.tasks = [];

        this.storageKey = "taskManagerTasks";

        this.loadTasks();
    }


    // ======================================
    // ADD TASK
    // ======================================

    add(task) {

        this.tasks.push(task);

        this.saveTasks();

        return task;
    }


    // ======================================
    // DELETE TASK
    // ======================================

    delete(id) {

        const taskId = Number(id);

        const originalLength = this.tasks.length;

        this.tasks = this.tasks.filter(
            task => task.id !== taskId
        );

        const deleted =
            this.tasks.length < originalLength;

        if (deleted) {

            this.saveTasks();
        }

        return deleted;
    }


    // ======================================
    // UPDATE TASK
    // ======================================

    update(id, updatedData) {

        const taskId = Number(id);

        const task = this.tasks.find(
            task => task.id === taskId
        );

        if (!task) {
            return false;
        }

        task.name = updatedData.name;

        task.description = updatedData.description;

        task.assignedTo = updatedData.assignedTo;

        task.dueDate = updatedData.dueDate;

        task.status = updatedData.status;

        this.saveTasks();

        return true;
    }


    // ======================================
    // ASSIGN TASK
    // ======================================

    assignTo(id, assignedTo) {

        const taskId = Number(id);

        const task = this.tasks.find(
            task => task.id === taskId
        );

        if (!task) {
            return false;
        }

        if (!assignedTo || assignedTo.trim() === "") {
            return false;
        }

        task.assignedTo = assignedTo.trim();

        this.saveTasks();

        return true;
    }


    // ======================================
    // GET TASK
    // ======================================

    getTask(id) {

        const taskId = Number(id);

        return this.tasks.find(
            task => task.id === taskId
        );
    }


    // ======================================
    // SAVE TO LOCAL STORAGE
    // ======================================

    saveTasks() {

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.tasks)
        );
    }


    // ======================================
    // LOAD FROM LOCAL STORAGE
    // ======================================

    loadTasks() {

        const storedTasks =
            localStorage.getItem(this.storageKey);

        if (!storedTasks) {

            this.tasks = [];

            return;
        }

        try {

            const parsedTasks =
                JSON.parse(storedTasks);

            this.tasks = parsedTasks.map(
                task =>
                    new Task(
                        task.name,
                        task.description,
                        task.assignedTo,
                        task.dueDate,
                        task.status,
                        task.id
                    )
            );

        } catch (error) {

            this.tasks = [];
        }
    }


    // ======================================
    // CLEAR ALL TASKS
    // ======================================

    clearAll() {

        this.tasks = [];

        localStorage.removeItem(
            this.storageKey
        );
    }
}


// ==========================================
// CREATE TASK MANAGER
// ==========================================

const taskManager = new TaskManager();


// ==========================================
// DOM ELEMENTS
// ==========================================

const taskForm =
    document.getElementById("taskForm");

const taskList =
    document.getElementById("taskList");

const saveButton =
    document.getElementById("saveButton");

const cancelButton =
    document.getElementById("cancelButton");

const nameInput =
    document.getElementById("name");

const descriptionInput =
    document.getElementById("description");

const assignedToInput =
    document.getElementById("assignedTo");

const dueDateInput =
    document.getElementById("dueDate");

const statusInput =
    document.getElementById("status");


// ==========================================
// EDITING TASK ID
// ==========================================

let editingTaskId = null;


// ==========================================
// VALIDATION
// ==========================================

function validateForm() {

    let valid = true;


    const nameError =
        document.getElementById("nameError");

    const descriptionError =
        document.getElementById("descriptionError");

    const assignedToError =
        document.getElementById("assignedToError");

    const dueDateError =
        document.getElementById("dueDateError");

    const statusError =
        document.getElementById("statusError");


    nameError.textContent = "";

    descriptionError.textContent = "";

    assignedToError.textContent = "";

    dueDateError.textContent = "";

    statusError.textContent = "";


    // NAME

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter the task name.";

        valid = false;
    }


    // DESCRIPTION

    if (descriptionInput.value.trim() === "") {

        descriptionError.textContent =
            "Please enter the task description.";

        valid = false;
    }


    // ASSIGNED TO

    if (assignedToInput.value.trim() === "") {

        assignedToError.textContent =
            "Please enter the assigned person.";

        valid = false;
    }


    // DUE DATE

    if (dueDateInput.value === "") {

        dueDateError.textContent =
            "Please select a due date.";

        valid = false;
    }


    // STATUS

    if (statusInput.value === "") {

        statusError.textContent =
            "Please select a task status.";

        valid = false;
    }


    return valid;
}


// ==========================================
// CLEAR FORM
// ==========================================

function clearForm() {

    taskForm.reset();

    editingTaskId = null;

    saveButton.textContent = "Save";

    document
        .querySelectorAll(".error")
        .forEach(error => {
            error.textContent = "";
        });
}


// ==========================================
// LOAD TASK INTO FORM
// ==========================================

function loadTaskIntoForm(id) {

    const task =
        taskManager.getTask(id);

    if (!task) {
        return;
    }


    nameInput.value =
        task.name;

    descriptionInput.value =
        task.description;

    assignedToInput.value =
        task.assignedTo;

    dueDateInput.value =
        task.dueDate;

    statusInput.value =
        task.status;


    editingTaskId = task.id;


    // Task 7 requirement

    saveButton.textContent = "Update";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// RENDER TASKS
// ==========================================

function renderTasks() {

    taskList.innerHTML = "";


    if (taskManager.tasks.length === 0) {

        taskList.innerHTML = `
            <div class="empty-message">
                No tasks available.
            </div>
        `;

        return;
    }


    taskManager.tasks.forEach(task => {

        const card =
            document.createElement("div");

        card.className = "task-card";

        card.dataset.id = task.id;


        let statusClass =
            "status-pending";


        if (task.status === "In Progress") {

            statusClass =
                "status-in-progress";
        }


        if (task.status === "Completed") {

            statusClass =
                "status-completed";
        }


        card.innerHTML = `

            <h3>${escapeHTML(task.name)}</h3>

            <p>
                <strong>Description:</strong>
                ${escapeHTML(task.description)}
            </p>

            <p>
                <strong>Assigned To:</strong>
                ${escapeHTML(task.assignedTo)}
            </p>

            <p>
                <strong>Due Date:</strong>
                ${escapeHTML(task.dueDate)}
            </p>

            <p>
                <strong>Status:</strong>

                <span class="status ${statusClass}">
                    ${escapeHTML(task.status)}
                </span>

            </p>

            <button
                class="delete-button"
                data-delete-id="${task.id}">
                Delete
            </button>

        `;


        // Click task card to update

        card.addEventListener(
            "click",
            function(event) {

                if (
                    event.target.classList.contains(
                        "delete-button"
                    )
                ) {
                    return;
                }

                loadTaskIntoForm(task.id);
            }
        );


        // Delete button

        const deleteButton =
            card.querySelector(".delete-button");


        deleteButton.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const confirmed =
                    confirm(
                        "Are you sure you want to delete this task?"
                    );

                if (!confirmed) {
                    return;
                }


                taskManager.delete(task.id);

                renderTasks();


                if (editingTaskId === task.id) {

                    clearForm();
                }
            }
        );


        taskList.appendChild(card);
    });
}


// ==========================================
// HTML ESCAPE
// ==========================================

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value == null ? "" : String(value);

    return div.innerHTML;
}


// ==========================================
// FORM SUBMIT
// ==========================================

taskForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        if (!validateForm()) {

            return;
        }


        const taskData = {

            name:
                nameInput.value.trim(),

            description:
                descriptionInput.value.trim(),

            assignedTo:
                assignedToInput.value.trim(),

            dueDate:
                dueDateInput.value,

            status:
                statusInput.value
        };


        // ==================================
        // UPDATE
        // ==================================

        if (editingTaskId !== null) {

            taskManager.update(
                editingTaskId,
                taskData
            );


            renderTasks();


            // Task 7 requirement:
            // Button changes back to Save
            // Form becomes empty

            clearForm();

            return;
        }


        // ==================================
        // ADD
        // ==================================

        const newTask =
            new Task(
                taskData.name,
                taskData.description,
                taskData.assignedTo,
                taskData.dueDate,
                taskData.status
            );


        taskManager.add(newTask);


        renderTasks();

        clearForm();
    }
);


// ==========================================
// CANCEL BUTTON
// ==========================================

cancelButton.addEventListener(
    "click",
    function() {

        clearForm();
    }
);


// ==========================================
// INITIAL PAGE LOAD
// ==========================================

renderTasks();


// ==========================================
// MAKE CLASSES AVAILABLE FOR UNIT TESTS
// ==========================================

if (typeof window !== "undefined") {

    window.Task = Task;

    window.TaskManager = TaskManager;

    window.taskManager = taskManager;

    window.renderTasks = renderTasks;

    window.validateForm = validateForm;

    window.clearForm = clearForm;
}