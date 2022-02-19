import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.nav`
position:fixed;
display: flex;
padding:5px 10px;
width: 100%;
height:50px;
top: 0;
margin-left: 5%;
right: 0;
align-items: center;
background-color:#FFFFFF;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 80px 60px rgba(0, 0, 0, 0.10)
`
export const Navbar = () => {
    return (
        <Div>
             <img style={{width: '6%', height: '70px',marginLeft:"2%"}} src="https://user-images.githubusercontent.com/87421852/154792165-fbba1305-27fd-4bc9-a4da-f50cfa9cc44e.png" alt=""/>
            <Link style={{ marginLeft: "22%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/home">Home</Link>
            <Link style={{ marginLeft: "22%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/">Login</Link>
            <Link style={{ marginLeft: "22%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/author">Author</Link>
           
        </Div>
    )
}