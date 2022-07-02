import React from 'react'

const DeleteBtn = (props) => {

  function handleClick(){
    props.setTasks(tasks => {
      const arr = tasks.filter(task => task.isCompleted === false);
      return arr;
    })
  }

  return (
    <button 
      onClick={handleClick}
      className='flex justify-between items-center gap-2 bg-[#EB5757] hover:bg-[#db4444] rounded-[4px] px-8 py-4 text-white absolute right-0'>
        <span className="material-symbols-outlined text-base">delete</span>
        <span className='text-base font-semibold leading-4'>delete all</span>
    </button>
  )
}

export default DeleteBtn