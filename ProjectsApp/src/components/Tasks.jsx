import NewTask from './NewTask.jsx';

export default function Tasks({tasks, onAdd, onDelete, projectId}) {
    const taskArr = tasks[projectId]
    const tasksExist = taskArr === undefined

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} id={projectId}/>
            {tasksExist && (
                <p className="text-stone-800 my-4">
                    This project does not have any tasks yet.
                </p>
            )}
            {!tasksExist && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {taskArr.map((task, index) => (
                        <li key={index} className="flex justify-between my-4">
                            <span>{task}</span>
                            <button
                                className="text-stone-700 hover:text-red-500"
                                onClick={() => onDelete(projectId, index)}
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}