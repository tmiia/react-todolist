export const Task = (props) =>{
  return(
  <div className={props.isCheck ? "task ischecked" : "task"} >
    <span> {props.taskName} </span>
    <div className="action">
      <button onClick={()=>{props.updateTask(props.id)}}>Done</button>
      <button onClick={()=>{props.deleteTask(props.id)}}>Supp.</button>
    </div>
  </div>
  );
}
