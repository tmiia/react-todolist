export const Task = (props) =>{
  return(
  <div className={props.isCheck ? "task ischecked" : "task"} >
    <span> {props.taskName} </span>
    <div className="action">
      <button onClick={()=>{props.updateTask(props.id)}}><img src='/icons/check_btn.svg'/></button>
      <button onClick={()=>{props.deleteTask(props.id)}}><img src='/icons/trash_btn.svg'/></button>
    </div>
  </div>
  );
}
