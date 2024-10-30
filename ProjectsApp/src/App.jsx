import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";


function App() {
    const [appState, setAppState] = useState({
        selectedProject: null,
        projects: []
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
            return{
                ...prevState,
                projects: projectArr,
                selectedProject: null
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
