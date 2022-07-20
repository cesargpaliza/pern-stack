import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      Menu
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/task/new">New Tast</Link></li>
      </ul>
      
    </div>
  )
}

export default Navbar