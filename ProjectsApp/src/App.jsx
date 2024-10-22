import {useState} from "react";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";
import ProjectSelected from "./components/ProjectSelected.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
let Projects = []

function App() {
  const [newProject, setNewProject] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);
  let showPanel

  function handleClick() {
      setNewProject(true);
  }

  function saveProject(projectInfo) {
      Projects.push(projectInfo);
      console.log(Projects);
      setNewProject(false)
  }

  function cancelProject() {
      setNewProject(false);
  }

  function selectProject(index){
      setProjectIndex(index);
  }

  function addTask(index, tasksArr){
    Projects[index].tasks = [...tasksArr];
    console.log(Projects);
  }

  if(newProject){
      showPanel = <NewProjectForm saveProject={saveProject} cancelProject={cancelProject}/>
  }else if(!newProject && projectIndex === null){
      showPanel = <NoProjectSelected newProject={handleClick}/>
  }else{
      showPanel = <ProjectSelected project={Projects[projectIndex]} index={projectIndex} addTask={addTask}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSideBar newProject={handleClick} projects={Projects} selectProject={selectProject}/>
        <div className="mt-24 text-center w-2/3">
            {showPanel}
        </div>
    </main>
  );
}

export default App;
