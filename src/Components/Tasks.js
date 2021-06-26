import Task from './Task'
import { useState } from 'react'

const Tasks = ({tasks, onDelete} ) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks
