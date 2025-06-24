const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    span.classList.toggle('completed'); // Step 5
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', () => {
    li.remove(); // Step 6
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
}

span.classList.toggle('completed');
li.remove();

