import { useState,useEffect } from "react"
import "./comments.css"

export const Comments = () => {
    
    const [name, setName] = useState("");
    const [set, setData] = useState([]);
    
    useEffect(() => {
        getData()
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }


    var currentdate =new Date();
    const handleSubmit = () => {
        let payload = {
            author: "Sushant",
            comments: name,
            time: currentdate.getMinutes()
        };

        fetch("http://localhost:5000/comment", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const getData = async() => {
        let res = await fetch("http://localhost:5000/comment");
        let data = await res.json();
        console.log(data);
        setData(data);
    }

    return (
        <>
        <div className="InputForm">
            <input
                onChange={handleChange}
                type="text"
                placeholder="Comment Here"
            />
            <button onClick={handleSubmit}>Submit</button>
            </div>
                   {
                    set.map((e) => (
                   <div className="mainDiv" key={e._id}>
                            <div style={{ display: 'flex', gap:"4%" }}>
                                <h4  style={{marginLeft:"35%"}}>{e.author}</h4>
                                <p style={{ fontSize:"1.3vw",marginTop:"20px",color:"#2c3e50" }}>{`Posted ${e.time} min ago`}</p>
                            </div>
                    <h2 style={{marginTop:"-1%",color:"#e74c3c"}}>{e.comments}</h2>
                    </div>
               ))
           }
      
        </>    
    )
}