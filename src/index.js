import { library } from "webpack";
import "./styles.css";

const modal = document.getElementById('taskModal');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const addBtn = document.getElementById('addTaskBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const submitBtn = document.getElementById('submitButton');

const proModal = document.getElementById('proModal');
const proList = document.getElementById('proList');
const proForm = document.getElementById('proForm');
const proCloseBtn = document.getElementsByClassName('pro-close')[0];
const addProBtn = document.getElementById('addProBtn');
const proSubmitBtn = document.getElementById('proSubmitBtn');
let newProButton;

let currentTaskList;

addBtn.onclick = function() {
    modal.style.display = 'block';
}
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    } if (event.target == proModal) {
        proModal.style.display = 'none'
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
 currentTaskList.removeChild(li);
 taskList.removeChild(li)
}
 
 li.appendChild(deleteBtn);
 taskList.appendChild(li)
 currentTaskList.appendChild(li);

 taskForm.reset();
 modal.style.display = 'none';
 
}

addProBtn.onclick = function() {
    proModal.style.display = 'block';
}

proCloseBtn.onclick = function() {
    proModal.style.display = 'none';
}

proSubmitBtn.onclick = function(event) {
    event.preventDefault(); 

    const proName = document.getElementById('proName').value;

    const newProButton = document.createElement('button');
    newProButton.classList.add('button');
    newProButton.textContent = `${proName}`;

    proList.appendChild(newProButton);

    proForm.reset(); 
    proModal.style.display = 'none'; 

//

  newProButton.onclick = function(event) {

    const mainContent = document.querySelector('.main-content')
    mainContent.innerHTML = ''

    const mainHeading = document.createElement('h2');
    mainHeading.textContent = proName; 

   currentTaskList = document.createElement('ul');
   currentTaskList.id = 'taskList';

   mainContent.appendChild(mainHeading);
   mainContent.appendChild(currentTaskList);

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close')
    closeBtn.textContent = 'X'

    closeBtn.onclick = function() {
        mainContent.innerHTML = `
        <h2>Tasks</h2>
        <ul id='taskList'></ul>`;
        newProButton.remove();
    }
    mainHeading.appendChild(closeBtn)
  }
}
