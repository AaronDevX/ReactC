import {useRef} from "react";

export default function NewProjectForm({saveProject, cancelProject}) {
    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const projectInfo = {};
        projectInfo.title = title.current.value;
        projectInfo.description = description.current.value;
        projectInfo.date = date.current.value;
        projectInfo.tasks = []

        saveProject(projectInfo);
    }
    return(
        <form className="mt-4 text-right">
            <div className="flex items-center gap-4">
                <button onClick={cancelProject}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">TITTLE</label>
                <input
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    type="text"
                    ref={title}
                />
            </p>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
                <textarea
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    ref={description}
                ></textarea>
            </p>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
                <input
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    type="date"
                    ref={date}
                />
            </p>
        </form>
)
}