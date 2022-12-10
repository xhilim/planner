import { Link } from "react-router-dom"

export function Nav() {
return(
    <nav>
    <Link to="/login">
    <button className="navbutton">Log in</button>
    </Link>
    </nav>
    )
} 