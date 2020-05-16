const taskList = document.getElementById("taskList");
const inputTask = document.getElementById("inputTask");
const taskListArray = [
    {task:'Go to shop', status:true},
    {task:'Learn JavaScript', status:false},
    {task:'Make dinner', status:false},
];

function addTask(){

    // inputTask = inputTask.trim();
    if(inputTask.value){
        taskListArray.push({task:inputTask.value, status:false});
    }

    inputTask.value = "";
    showTasks();
}

function changeStatus(index){
    taskListArray[index].status = !taskListArray[index].status;

    showTasks();
}

function deleteTask(elem){
    taskListArray.splice(elem.parentNode.id, 1);

    showTasks();
}

function showTasks(){
    taskList.innerHTML = "";
    for(var i=0; i<taskListArray.length; i++){
        if(taskListArray[i].status){
            taskList.innerHTML += ("<div class='toDo-item toDo-complited' id="+i+" onClick='changeStatus(this.id)'><p>"+taskListArray[i].task+"</p> <div class='delete-item' onClick='deleteTask(this)'><span></span></div></div>");
        }else{
            taskList.innerHTML += ("<div class='toDo-item' id="+i+" onClick='changeStatus(this.id)'><p>"+taskListArray[i].task+"</p> <div class='delete-item' onClick='deleteTask(this)'></div></div>");
        }
    }
}

window.onload = showTasks();