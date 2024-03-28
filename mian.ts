// Task type
type Task = {
    text: string;
    completed: boolean;
};

// Initialize task array
const tasks: Task[] = [];

// Function to add a task
function addTask(text: string) {
    tasks.push({ text: text, completed: false });
    console.log(`task "${text}" added successfully`);
}

// Function to list tasks
function listTasks() {
    console.log("---- To Do List----")
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.text} - ${task.completed ? 'Completed' : 'Incomplete'}`);
    });
}

// Add some example tasks
addTask("Do Coding");
addTask("Watch Anime");
addTask("Eat Food");

// List all tasks
listTasks();