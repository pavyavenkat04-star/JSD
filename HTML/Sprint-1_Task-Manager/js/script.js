const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName");
    const description = document.getElementById("description");
    const assignedTo = document.getElementById("assignedTo");
    const dueDate = document.getElementById("dueDate");
    const status = document.getElementById("status");

    let isValid = true;

    // Task Name Validation
    if (taskName.value.trim() === "") {
        taskName.classList.add("is-invalid");
        isValid = false;
    } else {
        taskName.classList.remove("is-invalid");
    }

    // Description Validation
    if (description.value.trim() === "") {
        description.classList.add("is-invalid");
        isValid = false;
    } else {
        description.classList.remove("is-invalid");
    }

    // Assigned To Validation
    if (assignedTo.value.trim() === "") {
        assignedTo.classList.add("is-invalid");
        isValid = false;
    } else {
        assignedTo.classList.remove("is-invalid");
    }

    // Due Date Validation
    if (dueDate.value === "") {
        dueDate.classList.add("is-invalid");
        isValid = false;
    } else {
        dueDate.classList.remove("is-invalid");
    }

    // Status Validation
    if (status.value === "") {
        status.classList.add("is-invalid");
        isValid = false;
    } else {
        status.classList.remove("is-invalid");
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // Create new task card
    addTaskCard(
        taskName.value,
        description.value,
        assignedTo.value,
        dueDate.value,
        status.value
    );

    // Reset form
    taskForm.reset();

    // Remove validation classes
    taskName.classList.remove("is-invalid");
    description.classList.remove("is-invalid");
    assignedTo.classList.remove("is-invalid");
    dueDate.classList.remove("is-invalid");
    status.classList.remove("is-invalid");
});

function addTaskCard(name, description, assignedTo, dueDate, status) {
    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("div");
    listItem.className = "list-group-item mb-3";

    let badgeClass = "text-bg-secondary";

    if (status === "IN PROGRESS") {
        badgeClass = "text-bg-primary";
    } else if (status === "REVIEW") {
        badgeClass = "text-bg-warning";
    } else if (status === "DONE") {
        badgeClass = "text-bg-success";
    }

    listItem.innerHTML = `
        <div class="card border-0">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>

                <p class="card-text">
                    ${description}
                </p>

                <p>
                    <strong>Assigned To:</strong> ${assignedTo}
                </p>

                <p>
                    <strong>Due Date:</strong> ${formatDate(dueDate)}
                </p>

                <span class="badge ${badgeClass}">
                    ${status}
                </span>
            </div>
        </div>
    `;

    taskList.appendChild(listItem);
}

function formatDate(dateValue) {
    const dateParts = dateValue.split("-");

    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}