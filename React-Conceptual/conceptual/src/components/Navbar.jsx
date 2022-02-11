import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <div style={{display: 'flex', justifyContent:"space-around",border:"3px solid navy",fontSize:"30px",fontWeight:"600"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signin">Login</Link>
            <Link to="/contact">Contact</Link>
        </div>
        
    )
}