import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [appState, setAppState] = useState({
        selectedProject: null,
        projects: [],
        tasks: {}
    })

    function handleNewProject(value){
        setAppState({...appState, selectedProject: value})
    }
    function handleCancelProject(){
        setAppState({...appState, selectedProject: null})
    }
    function handleSaveProject(project){
        setAppState(prevState => {
            const projectsArr = [...prevState.projects, project];
            return{
                ...prevState,
                projects: projectsArr,
                selectedProject: null
            }
        })
    }
    function handleSelectProject(id){
        setAppState(prevState => {
            return {...prevState, selectedProject: id}
        })
    }
    function handleDeleteProject(id){
        setAppState(prevState => {
            const projectArr = prevState.projects.filter(project => project.id !== id);
            const tasksArr = {...prevState.tasks}
            if(id in tasksArr){
                delete tasksArr[id]
            }
            return{
                projects: projectArr,
                tasks: tasksArr,
                selectedProject: null
            }
        })
    }
    function handleAddTask(id, task){
        setAppState(prevState => {
            const taskById = prevState.tasks[id] || [];
            taskById.push(task);
            const taskObj = prevState.tasks
            taskObj[id] = taskById;

            return{
                ...prevState,
                tasks: taskObj
            }
        })
    }
    function handleDeleteTask(idProject, idTask){
        setAppState(prevState => {
            const tasksArr = {...prevState.tasks}
            const projectTasks = [...tasksArr[idProject]];
            projectTasks.splice(idTask, 1)
            tasksArr[idProject] = projectTasks;
            return{
                ...prevState,
                tasks: tasksArr,
            }
        })
    }

    let content
    if(appState.selectedProject === null){
        content = <NoProjectSelected newProject={handleNewProject}/>
    }else if(appState.selectedProject === 0){
        content = <NewProject cancelProject={handleCancelProject} saveProject={handleSaveProject}/>
    }else{
        content = <SelectedProject
            projects={appState.projects}
            selectedProjectId={appState.selectedProject}
            deleteProject={handleDeleteProject}
            tasks={appState.tasks}
            deleteTask={handleDeleteTask}
            addTask={handleAddTask}
        />
    }

    return (
        <main className="h-screen my-8 flex gap-8">

            <ProjectsSidebar
                newProject={handleNewProject}
                projects={appState.projects}
                selectedProjectId={appState.selectedProject}
                onSelectProject={handleSelectProject}/>
            {content}
        </main>
    );
}

export default App;
