import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const [loading, setLoading] = useState( false )
  const [editing, setEditing] = useState( false )

  useEffect(() => {
    if(params.id) {
      loadTask(params.id)
    }
    
  }, [params.id])

  const loadTask = async (id) => {    
    const res = await fetch(`http://localhost:4000/task/${id}`)
    const { title, description } = await res.json()
    setTask({ title, description})
    setEditing(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if(setEditing){
      await fetch(`http://localhost:4000/task/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json"
        }
      })
    }else{
      await fetch('http://localhost:4000/task', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json"
        }
      })
    }
    navigate('/')
  }

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h3>{editing? 'Edit' : 'Create'} Task</h3>
      {
        loading === false ?
        <form onSubmit={handleSubmit}>
          <label>Title</label><br/>
          <input 
            name="title" 
            onChange={handleChange}
            value={task.title}            
          /><br/>

          <label>Description</label><br/>
          <textarea 
            name="description" 
            onChange={handleChange}
            value={task.description}
          /><br/>

          <input type="submit"  value={editing? 'Edit' : 'Create'} />
        </form>
        : 'Loading'
      }


    </div>
  )
}

export default TaskForm