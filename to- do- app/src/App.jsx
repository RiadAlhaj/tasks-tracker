import { useState } from 'react'
import './App.css'


function toDoList(){
  const [tasks,setTasks]= useState ([]);
  const [newTask,setNewTask]=useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  
  function addTask(){
    if(newTask.trim() !== ""){
      setTasks(t=> [...t,newTask]);
      setNewTask("");
    }
  }
  
  function deleteTask(index){
    const updatedTask=tasks.filter((_, i)=> i !== index);
    setTasks(updatedTask);
  }


  function completeTask(index) {
    const taskToComplete = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToComplete]);
  }
  


  function toggleShowCompleted() {
    setShowCompleted(!showCompleted);
  }

  return(
  <div className="To-Do-List">
        <h1 className="h1">To-Do-List</h1>
        <div>
          <input
              type="text"
              placeholder="Enter a task.."
              value={newTask}
              onChange={handleInputChange}/>
          <button
          className="add-button" onClick={addTask}>
            Add One
          </button>
        </div>
        <ol>
          {tasks.map((task,index)=> 
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={()=> deleteTask(index)}>
                Delete
              </button>
              <button className="omplete-buttonc" onClick={() => completeTask(index)}>
              Complete
              </button>
            </li>
          )}
        </ol>
        <button className="show-completed-button" onClick={toggleShowCompleted}>
        {showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
      </button>

      {showCompleted && (
        <div>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                <span className="text">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

  </div>);
}

export default toDoList;
