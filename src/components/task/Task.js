import React from 'react'

const Task = (props) => {

    // Changing the isCompleted state value when checkbox is checked or unchecked
    function handleChange(event){

        const id = event.target.nextElementSibling.textContent;

        const matchTask = props.tasks.find(task => task.id === id)
        const index = props.tasks.findIndex(task => task.id === id);
        console.log(index)
        
        let updatedMatchedTask = {}
        if(event.target.checked){
            updatedMatchedTask = {...matchTask, isCompleted: true}
        } else{   
            updatedMatchedTask = {...matchTask, isCompleted: false} 
        }

        props.setTasks(tasks => {
            return [
                ...tasks.slice(0,index),
                updatedMatchedTask,
                ...tasks.slice(index+1)
            ]
        })
    }

    // Set the new tasks state with particular task removed when delete button for that task is clicked
    function deleteTaskHandler(event){
        const arr = props.tasks.filter(task => {
            const id = event.currentTarget.parentElement.id;
            return task.id !== id;
        })
        props.setTasks(() => arr)
    }

  return (
    <div 
        id={props.taskText}
        className='flex justify-between items-center my-4'>
        <div className='flex justify-between items-center'>
            <input 
                type="checkbox" 
                name="task" 
                id="task" 
                className='w-6 h-6'
                onChange={handleChange}
                checked={props.isCompleted}/>
            <label 
                htmlFor="task" 
                className={
                    props.isCompleted ? 
                    'ml-2 text-lg text-[#333333] font-montserrat font-medium leading-6 line-through' : 
                    'ml-2 text-lg font-montserrat font-medium leading-6'}>
                    {props.taskText}
            </label>
        </div>
        <button 
            className='mr-2 grid place-items-center'
            onClick={deleteTaskHandler}>
            <span className="material-symbols-outlined transition-colors text-[#BDBDBD] hover:text-[#EB5757]">delete</span>
        </button>
    </div> 
  )
}

export default Task