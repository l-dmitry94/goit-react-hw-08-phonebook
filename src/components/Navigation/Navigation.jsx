import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/contacts">Contacts</Link>
        </li>
    </ul>
  )
}

export default Navigation
