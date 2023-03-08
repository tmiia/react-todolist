import './App.css';
import { useState } from "react";
import { Task } from './Task';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  }

  const addTask = () =>{
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      isCheck: false
    }
    setTodolist([...todolist, task]);
  }

  const checkTask = (id) =>{
    setTodolist(
      todolist.map((task)=>{
        if(task.id === id){
          const checkValue = task.isCheck === false ? true : false;
          return {...task, isCheck: checkValue};
        }
        else{
          return task;
        }
      })
    );
  }

  const deleteTask = (id) =>{
    const newTodolist = todolist.filter((task)=>{
      return task.id !== id;
    })
    setTodolist(newTodolist);
  }

  return (
    <div className='App'>
      <header>
        <img src='/logo.svg' alt='logo' />
        <div className='menu mobile'>
          <a href='#'><img src='/icons/menu.svg' alt='menu burger' /></a>
        </div>
      </header>
      <main>
        <div className='title__container'>
          <h1>Be more productive</h1>
        </div>
        <div className='todolist'>
        <div className='addTask'>
          <div className='taskForm'>
            <input className='task__text' type="text" name="task" id="task" onChange={handleChange} />
            <button className='task__add-btn' onClick={addTask}><img src='/icons/add_btn.svg' alt='add icon'/></button>
          </div>
        </div>

        <div className='list'>
          {todolist.length === 0 ? <span className="task__text">Vous n'avez pas encore de tâches</span> : todolist.map((task)=>{
            return(
              <Task taskName={task.taskName} id={task.id} isCheck={task.isCheck} deleteTask={deleteTask} checkTask={checkTask} />
            );
          })}
        </div>
        </div>
      </main>
    </div>
  );
}



export default App;
