document.addEventListener('DOMContentLoaded',()=>{
   const taskText= document.getElementById('taskInput');
   const addBtn=document.getElementById('addBtn');
   const tasklist=document.getElementById('tasklist'); 
})
function addtask(){
    const taskText=taskInput.value.trim()
    if(taskText!==''){
        const li =document.createElement('li');
        const span =document.createElement('span');
        span.textContent=taskText;

        const action=document.createElement("div");
        action.className='action';

        const editbutton= document.createElement('button');
        editbutton.className='edit-btn'
        editbutton.textContent='Edit'
        editbutton.addEventListener('click',()=>edit(li));

        const completebutton= document.createElement('button');
        completebutton.className='complete-btn'
        completebutton.textContent='Complete'
        completebutton.addEventListener('click',()=>complete(li));

        const deletebutton=document.createElement('button');
        deletebutton.textContent='Delete'
        deletebutton.addEventListener('click',()=>remove(li));

        action.appendChild(editbutton)
        action.appendChild(completebutton)
        action.appendChild(deletebutton)

        li.appendChild(span)
        li.appendChild(action)

        tasklist.appendChild(li)
        taskInput.value=''
        
    }

     
}

function remove(taskElement){
    tasklist.removeChild(taskElement);
}
function complete(taskElement){
    taskElement.classList.toggle('completed')

}
function edit(taskElement){
    const span=taskElement.querySelector('span')
    const newTaskText=prompt('edit your Task',span.textContent)
    if(newTaskText!==''&&newTaskText.trim()==''){
        span.textContent=newTaskText.trim()
    }

}
addBtn.addEventListener('click',addtask);

taskInput.addEventListener('keydown',(event)=>{
    if((event.key)=='Enter'){
        addtask();
    }
})
