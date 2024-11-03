document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');

    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = `${taskInput.value} - ${taskDate.value}`;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        taskList.appendChild(li);
        taskInput.value = '';
        taskDate.value = '';
    }
});