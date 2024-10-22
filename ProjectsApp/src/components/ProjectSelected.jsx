import {useRef, useState} from "react";

export default function ProjectSelected({project, index, addTask}) {
   const [tasksArr, setTasksArr] = useState([...project.tasks]);
   const task = useRef();

   function handleClick(){
       setTasksArr(beforeTasks=>{
           return [...beforeTasks, task.current.value]
       })
       addTask(index, tasksArr);
   }
   function clearTask(index){
       setTasksArr(beforeTasks=> beforeTasks.filter((_,i)=> i !== index))
       addTask(index, tasksArr);
   }

   return(
       <div>
           <header className="pb-4 mb-4 border-b-2 border-stone-300">
               <div className="flex justify-between">
                   <div>
                       <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                       <p className="mb-4 text-stone-400">{project.date}</p>
                   </div>
                   <button className="text-stone-600 hover:text-stone-950">Delete</button>
               </div>
               <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
           </header>
           <div>
               <h2>Tasks</h2>
               <div>
                   <input type="text" ref={task}/>
                   <button onClick={handleClick}>Add Task</button>
               </div>
               <ul>
                   {tasksArr.length > 0 && tasksArr.map((task, index) => (
                       <>
                           <li key={index}>{task}</li>
                           <button onClick={()=>clearTask(index)}>Clear</button>
                       </>
                   ))}
               </ul>
           </div>
       </div>
   )
}