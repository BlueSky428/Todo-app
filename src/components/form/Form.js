import React, {useState} from 'react'

const Form = (props) => {

  const [taskText, setTaskText] = useState('')

  // setting a state with a value entered in the text input
  function inputChangeHandler(event){
    setTaskText(() => event.target.value) 
  }

  // Adding the new task to tasks state when form is submitted and empty the input field
  function submitHandler(event){
    event.preventDefault();
    props.setTasks(prevTasks => {
      return [
        ...prevTasks,
        { 
          id: taskText, 
          taskText: taskText,
          isCompleted: false
        }
      ]
    })
    setTaskText('');
  }

  return (
    <div className='my-8'>
        <form 
          onSubmit={submitHandler}
          className='md:flex-row flex flex-col justify-between items-center gap-3'>
            <input 
                type="text" 
                name='task-name'
                placeholder='Add details'
                onChange={inputChangeHandler}
                value={taskText}
                className='w-full px-3 py-5 font-montserrat text-sm font-normal leading-4 text-[#828282] border border-[#BDBDBD] rounded-xl'/>
            <button 
                type="submit" 
                className='md:w-auto w-full bg-[#2f80ed] hover:bg-[#1f70d9] text-white px-10 py-[18px] rounded-xl shadow-[0_2px_6px_0_rgba(127, 177, 243, 0.4)]'>
                Add
            </button>
        </form>
    </div>
  )
}

export default Form