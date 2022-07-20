import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './components/TaskList'
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<TaskList/>} />
        <Route path='/task/new' element={<TaskForm/>}/>
        <Route path='/task/edit/:id' element={<TaskForm/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
