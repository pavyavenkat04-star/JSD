// ==========================================
// UNIT TESTING SYSTEM
// ==========================================

const results =
    document.getElementById("results");

const summary =
    document.getElementById("summary");


let passed = 0;

let failed = 0;


// ==========================================
// TEST FUNCTION
// ==========================================

function test(testName, testFunction) {

    try {

        testFunction();

        passed++;

        displayResult(
            testName,
            true,
            "Test passed successfully."
        );

    } catch (error) {

        failed++;

        displayResult(
            testName,
            false,
            error.message
        );
    }
}


// ==========================================
// ASSERTION
// ==========================================

function assert(condition, message) {

    if (!condition) {

        throw new Error(
            message || "Assertion failed."
        );
    }
}


// ==========================================
// DISPLAY TEST RESULT
// ==========================================

function displayResult(
    testName,
    success,
    message
) {

    const div =
        document.createElement("div");

    div.className = "test";


    if (success) {

        div.innerHTML = `

            <div class="test-name pass">
                ✔ PASS: ${testName}
            </div>

            <div class="details">
                ${message}
            </div>

        `;

    } else {

        div.innerHTML = `

            <div class="test-name fail">
                ✘ FAIL: ${testName}
            </div>

            <div class="details">
                ${message}
            </div>

        `;
    }


    results.appendChild(div);
}


// ==========================================
// CREATE TEST TASK MANAGER
// ==========================================

const testManager =
    new TaskManager();

testManager.clearAll();


// ==========================================
// TEST 1 - ADD
// ==========================================

test(
    "TaskManager Add Function",
    function() {

        const task =
            new Task(
                "Learn Java",
                "Study Java OOP",
                "Abinaya",
                "2026-09-15",
                "Pending",
                1001
            );


        testManager.add(task);


        assert(
            testManager.tasks.length === 1,
            "Task was not added."
        );


        assert(
            testManager.tasks[0].name === "Learn Java",
            "Task name is incorrect."
        );
    }
);


// ==========================================
// TEST 2 - ASSIGN TO
// ==========================================

test(
    "TaskManager Assign To Function",
    function() {

        const result =
            testManager.assignTo(
                1001,
                "Kumar"
            );


        assert(
            result === true,
            "Assign To function returned false."
        );


        assert(
            testManager.tasks[0].assignedTo === "Kumar",
            "Task was not assigned correctly."
        );
    }
);


// ==========================================
// TEST 3 - UPDATE
// ==========================================

test(
    "TaskManager Update Function",
    function() {

        const updatedData = {

            name: "Learn Advanced Java",

            description:
                "Study Java OOP and Collections",

            assignedTo: "Abinaya",

            dueDate: "2026-09-20",

            status: "In Progress"
        };


        const result =
            testManager.update(
                1001,
                updatedData
            );


        assert(
            result === true,
            "Update function returned false."
        );


        const task =
            testManager.getTask(1001);


        assert(
            task.name === "Learn Advanced Java",
            "Task name was not updated."
        );


        assert(
            task.status === "In Progress",
            "Task status was not updated."
        );
    }
);


// ==========================================
// TEST 4 - LOCAL STORAGE
// ==========================================

test(
    "TaskManager LocalStorage Save",
    function() {

        const stored =
            localStorage.getItem(
                "taskManagerTasks"
            );


        assert(
            stored !== null,
            "Task was not stored in LocalStorage."
        );


        const parsed =
            JSON.parse(stored);


        assert(
            parsed.length === 1,
            "Incorrect number of tasks in LocalStorage."
        );
    }
);


// ==========================================
// TEST 5 - LOAD FROM LOCAL STORAGE
// ==========================================

test(
    "TaskManager LocalStorage Load",
    function() {

        const newManager =
            new TaskManager();


        assert(
            newManager.tasks.length === 1,
            "Task was not loaded from LocalStorage."
        );


        assert(
            newManager.tasks[0].name ===
            "Learn Advanced Java",
            "Loaded task data is incorrect."
        );
    }
);


// ==========================================
// TEST 6 - UI ADD
// ==========================================

test(
    "UI Add Task Displays Task in HTML",
    function() {

        const originalTasks =
            taskManager.tasks;


        taskManager.clearAll();


        const task =
            new Task(
                "HTML Practice",
                "Practice HTML forms",
                "Abinaya",
                "2026-09-18",
                "Pending",
                2001
            );


        taskManager.add(task);

        renderTasks();


        const card =
            document.querySelector(
                '.task-card[data-id="2001"]'
            );


        assert(
            card !== null,
            "Task card was not added to HTML."
        );


        assert(
            card.textContent.includes(
                "HTML Practice"
            ),
            "Task name is not displayed in HTML."
        );


        taskManager.clearAll();

        taskManager.tasks =
            originalTasks;

        renderTasks();
    }
);


// ==========================================
// TEST 7 - UI DELETE
// ==========================================

test(
    "UI Delete Task Removes Task from HTML",
    function() {

        taskManager.clearAll();


        const task =
            new Task(
                "Delete Test",
                "Test deleting a task",
                "Abinaya",
                "2026-09-19",
                "Pending",
                3001
            );


        taskManager.add(task);

        renderTasks();


        let card =
            document.querySelector(
                '.task-card[data-id="3001"]'
            );


        assert(
            card !== null,
            "Task card does not exist before deletion."
        );


        taskManager.delete(3001);

        renderTasks();


        card =
            document.querySelector(
                '.task-card[data-id="3001"]'
            );


        assert(
            card === null,
            "Task card was not removed from HTML."
        );
    }
);


// ==========================================
// TEST 8 - DELETE TASK MANAGER
// ==========================================

test(
    "TaskManager Delete Function",
    function() {

        taskManager.clearAll();


        const task =
            new Task(
                "Delete Function Test",
                "Testing delete function",
                "Abinaya",
                "2026-09-20",
                "Pending",
                4001
            );


        taskManager.add(task);


        const result =
            taskManager.delete(4001);


        assert(
            result === true,
            "Delete function returned false."
        );


        assert(
            taskManager.tasks.length === 0,
            "Task was not deleted."
        );
    }
);


// ==========================================
// TEST 9 - INVALID ASSIGN
// ==========================================

test(
    "Assign To Rejects Empty Name",
    function() {

        const task =
            new Task(
                "Assignment Test",
                "Testing assignment",
                "Abinaya",
                "2026-09-21",
                "Pending",
                5001
            );


        testManager.add(task);


        const result =
            testManager.assignTo(
                5001,
                ""
            );


        assert(
            result === false,
            "Empty assigned name should be rejected."
        );


        testManager.delete(5001);
    }
);


// ==========================================
// TEST 10 - TASK JSON
// ==========================================

test(
    "Task Object Supports JSON Format",
    function() {

        const task =
            new Task(
                "JSON Test",
                "Testing JSON structure",
                "Abinaya",
                "2026-09-22",
                "Pending",
                6001
            );


        const json =
            JSON.stringify(task);


        const parsed =
            JSON.parse(json);


        assert(
            parsed.name === "JSON Test",
            "JSON task name is incorrect."
        );


        assert(
            parsed.assignedTo === "Abinaya",
            "JSON assignedTo is incorrect."
        );


        assert(
            parsed.status === "Pending",
            "JSON status is incorrect."
        );
    }
);


// ==========================================
// FINAL SUMMARY
// ==========================================

summary.textContent =
    `Tests Passed: ${passed} | Tests Failed: ${failed}`;


if (failed === 0) {

    summary.className = "pass";

} else {

    summary.className = "fail";
}