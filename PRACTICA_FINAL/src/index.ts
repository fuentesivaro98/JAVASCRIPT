const input= document.querySelector('input');
const TaskList=document.querySelector('#taskList')
var ArrayTasks=["Hacer comida", "Ver tele"];








//functions


function listTaskElements(ArrayTasks: string[]){

  for(let i=0; i<ArrayTasks.length; i++){

    const task=document.createElement('li');

    task.textContent=ArrayTasks[i];

    TaskList.appendChild(task);



  }



}

function addTask(nameTask: string){

  ArrayTasks.push(nameTask);
  listTaskElements(ArrayTasks);

}






//events
input.onkeyup=(e)=>{


if(e.key==='Enter'){

  if (input.value) {

  addTask(input.value);


input.focus();
input.select();

}

}



}



