import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const Home = () => {
    const { token, handleToken } = useContext(AuthContext);

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={handleToken}>{token?"Sign-In":"Sign-Out"}</button>
        </div>
    )
}