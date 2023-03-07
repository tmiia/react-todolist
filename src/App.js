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
      taskName: newTask
    }
    setTodolist([...todolist, task]);
  }

  const deleteTask = (id) =>{
    const newTodolist = todolist.filter((task)=>{
      return task.id !== id;
    })
    setTodolist(newTodolist);
  }

  return (
    <div className='App'>
      <h1>To do List</h1>

      <div className='addTask'>
        <input type="text" name="task" id="task" onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className='list'>
        {todolist.map((task)=>{
          return(
            <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
          );
        })}
      </div>
    </div>
  );
}



export default App;
