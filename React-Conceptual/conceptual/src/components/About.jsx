import { useState, useEffect } from "react";

export const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("Count is updated")
        console.log("count is Updated");
    }, [count]);

    
    return (
        <div>
            <h1>Count is :{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    )
}