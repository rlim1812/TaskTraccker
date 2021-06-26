import { useState } from 'react'
import Header from './Components/Header.js'
import Tasks from './Components/Tasks.js'
import AddTask from './Components/AddTask.js'

function App() {
    const [showAddTask, setShowAddTask] = useState(true)
    const [tasks, setTasks] = useState([])

    const onAdd = () => {
        setShowAddTask(!showAddTask)
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder on and off
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
    }

    return (
        <div className="container">
            <Header title="Task Tracker" onAdd={onAdd} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {/*Show task list only if there are existing tasks*/}
            {tasks.length > 0 ? <Tasks onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
        </div>
    )
}


export default App