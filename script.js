const inputText = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearAll = document.getElementById('clearTasksButton');

addTask = () => {
    const taskText = inputText.value.trim();    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }   
    const ListItem = document.createElement('li');
    ListItem.innerHTML = 
    `<span id="taskText">${taskText}</span>
    <button class="deleteButton">Delete</button>
    <button class="editButton">Edit</button>`;
    taskList.appendChild(ListItem);
    inputText.value = "";

    const deleteBtn = ListItem.querySelector('.deleteButton');
    deleteBtn.addEventListener('click', () => {
        ListItem.remove();
    });

    const editBtn = ListItem.querySelector('.editButton');
    editBtn.addEventListener('click', () => {
        const taskText = ListItem.querySelector('#taskText');
        const newText = prompt('Edit your task:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskText.textContent = newText.trim();
        }
    });
}; 

clearAllTasks = () =>{
    taskList.innerHTML = '';
}

addButton.addEventListener('click', addTask);
clearAll.addEventListener('click', clearAllTasks);