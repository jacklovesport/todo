import "./styles.css";

const modal = document.getElementById('taskModal');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');

const addBtn = document.getElementById('addTaskBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const submitBtn = document.getElementById('submitButton');


addBtn.onclick = function() {
    modal.style.display = 'block';
}
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

 submitBtn.onclick = function () {
 const taskName = document.getElementById('taskName').value;
 const taskDate = document.getElementById('taskDate').value;
 const taskPriority = document.getElementById('taskPriority').value;

 const li = document.createElement('li');
 li.classList.add('task-item');

 const colorBox = document.createElement('span');
 colorBox.classList.add('color-box');
 switch (taskPriority) {
     case 'low':
         colorBox.textContent = 'LOW';
         colorBox.style.backgroundColor = 'yellow';
         break;
     case 'medium':
        colorBox.textContent = 'MEDIUM';
         colorBox.style.backgroundColor = 'orange';
         break;
     case 'high':
        colorBox.textContent = 'HIGH';
         colorBox.style.backgroundColor = 'red';
         break;
 }

 li.textContent = `${taskName} - ${taskDate} - Priority:`;
 li.appendChild(colorBox);


 const deleteBtn = document.createElement('button');
 deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('delete-button');
   deleteBtn.onclick = function() {
    taskList.removeChild(li);
}
 
 li.appendChild(deleteBtn);
 taskList.appendChild(li);

 taskForm.reset();
 modal.style.display = 'none';
 
}

const proModal = document.getElementById('proModal');
const proList = document.getElementById('proList');
const proForm = document.getElementById('proForm');

const addProBtn = document.getElementById('addProBtn');
const proSubmitBtn = document.getElementById('proSubmitBtn');

addProBtn.onclick = function() {
    modal.style.display = 'block';
}

proSubmitBtn.onclick = function() {
    
}