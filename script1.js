
const newTaskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  todoList.innerHTML = ''; 

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.toggle('completed', task.completed);

    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteTask(index);

    taskText.onclick = () => toggleTask(index);

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();

  if (taskText) {
    const newTask = {
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    newTaskInput.value = ''; 
    saveTasks();
    renderTasks();
  }
});
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks();
