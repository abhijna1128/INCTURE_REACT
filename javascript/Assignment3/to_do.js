// function addTask(){
//     let obj=document.getElementsByClassName("add");
//     let input=obj.value;
//         if(input!=""){
//             let objadd=document.getElementById("task");
//             input.push(objadd);
//         }
//     }
// Select elements
const taskInput = document.getElementById('display');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create new li
  const li = document.createElement('li');

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';

  // Create label
  const label = document.createElement('label');
  label.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';

  // Append elements to li
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  // Add event listeners to new checkbox and delete button
  checkbox.addEventListener('change', toggleStrikeThrough);
  deleteBtn.addEventListener('click', deleteTask);
}

// Function to toggle strikethrough on label
function toggleStrikeThrough(event) {
  const checkbox = event.target;
  const label = checkbox.nextElementSibling; // label comes right after checkbox
  if (checkbox.checked) {
    label.style.textDecoration = 'line-through';
  } else {
    label.style.textDecoration = 'none';
  }
}

// Function to delete the task
function deleteTask(event) {
  const button = event.target;
  const li = button.parentElement;
  taskList.removeChild(li);
}

// Attach event listeners to existing checkboxes and delete buttons on page load
document.querySelectorAll('.task-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', toggleStrikeThrough);
});

document.querySelectorAll('.delete').forEach(button => {
  button.addEventListener('click', deleteTask);
});
