import React, {useState} from 'react'
import Category from './components/category/Category';
import DeleteBtn from './components/deleteBtn/DeleteBtn';
import Form from './components/form/Form';
import Task from './components/task/Task';

function App() {

  const [tasks, setTasks] = useState(
    [
        { 
          id: 'Do coding challenges', 
          taskText: 'Do coding challenges',
          isCompleted: false
        }, 
        {
          id: 'Complete TODO and Random Quote app',
          taskText: 'Complete TODO and Random Quote app',
          isCompleted: false
        }, 
    ])

  const [activeCategory, setActiveCategory] = useState('all')
  let tasksList = createTasksList(tasks);

  function handleCategory(event){
      const id = event.target.id;
      setActiveCategory(() => id)
  } 

  const activeTasksList = tasks.filter(task => task.isCompleted === false)
  const completedTasksList = tasks.filter(task => task.isCompleted === true)

  if(activeCategory === 'all'){
    tasksList = createTasksList(tasks)
  } else if(activeCategory === 'active'){
    tasksList = createTasksList(activeTasksList)
  } else if(activeCategory === 'completed'){
    tasksList = createTasksList(completedTasksList)
  } 

  function createTasksList(arr){
    return arr.map(task => (
      <Task 
        key={task.id} 
        taskText={task.taskText} 
        tasks={tasks} 
        setTasks={setTasks}
        isCompleted={task.isCompleted} 
      />
    ))
  }

  return (
    <div className="my-8 max-w-2xl w-[90%] mx-auto relative">
      <h1 className='font-raleway text-center text-4xl font-bold tracking-tighter mb-14'>#todo</h1> 
      <Category 
        activeCategory={activeCategory} 
        handleCategory={handleCategory} 
      />
      <Form setTasks={setTasks} />
      {tasksList}
      {activeCategory === 'completed' && <DeleteBtn setTasks={setTasks} />}
    </div>
  );
}

export default App;
