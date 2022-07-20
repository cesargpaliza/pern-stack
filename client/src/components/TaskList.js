import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {


    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    const loadTask = async () => {
        try {
            const res = await fetch('http://localhost:4000/task')
            const data = await res.json()
            console.log(data)
            setTasks(data)    
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        loadTask()
    }, [])
    
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:4000/task/${id}`,{
            method: "DELETE"
        })
        if(res.status === 402){
            setTasks(tasks.filter( x => x.id !== id))
        }
    }

    return (
        <>
        <div>TaskList</div>
            {   
                tasks.map((task) => {
                return(
                    <div key={task.id}>
                        <div> {`${task.title}: ${task.description}`}</div>
                        <button onClick={() => navigate(`/task/edit/${task.id}`) }>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <br/><br/>
                    </div>
                )})
            }
        </>


    )
}

export default TaskList