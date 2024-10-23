import {useRef, useState} from "react";

export default function ProjectSelected({projects, id, addTask}) {
   const [tasksArr, setTasksArr] = useState(projects.find(project=> project.id === id));
   console.log(tasksArr)
   const task = useRef();

   function handleClick(){
       setTasksArr(beforeProject =>{
           const updatedTasks = [...beforeProject.tasks, task.current.value];
           addTask(id, updatedTasks);
           return {
               ...beforeProject,
               tasks: updatedTasks
           };
       })
   }

   function clearTask(index){
       setTasksArr(beforeProject => {
           const updatedTasks = [...beforeProject.tasks.filter((_,i)=> i !== index)]
           addTask(id, updatedTasks);
           return {
               ...beforeProject,
               tasks: updatedTasks
           }
       })
   }

   return(
       <div>
           <header className="pb-4 mb-4 border-b-2 border-stone-300">
               <div className="flex justify-between">
                   <div>
                       <h1 className="text-3xl font-bold text-stone-600 mb-2">{tasksArr.title}</h1>
                       <p className="mb-4 text-stone-400">{tasksArr.date}</p>
                   </div>
                   <button className="text-stone-600 hover:text-stone-950">Delete</button>
               </div>
               <p className="text-stone-600 whitespace-pre-wrap">{tasksArr.description}</p>
           </header>
           <div>
               <h2>Tasks</h2>
               <div>
                   <input type="text" ref={task}/>
                   <button onClick={handleClick}>Add Task</button>
               </div>
               <ul>
                   {tasksArr.tasks.length>0 && tasksArr.tasks.map((task, index) => (
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