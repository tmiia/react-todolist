export const Task = (props) =>{
  return(
  <div>
    <span> {props.taskName} </span>
    <button>Done</button>
    <button onClick={()=>{props.deleteTask(props.id)}}>Supp.</button>
  </div>
  );
}
