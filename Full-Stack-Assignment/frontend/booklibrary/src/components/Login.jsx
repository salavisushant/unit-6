import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const [form, setForm] = useState(null);
    
    const handleChange = (e) => {
        let { name,value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        fetch("https://myclonedata.herokuapp.com/user", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
            return res.json();
            })
            .then((res) => {
                console.log(res);
                navigate("/home")
            })
            .catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <ChakraProvider>
            <FormControl style={{ marginTop: "10%", width: "30%", marginLeft: "35%" }}>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input style={{width:"90%",margin:"2%"}} id='email' name='email' type='email' onChange={handleChange} />
        
            <FormLabel htmlFor='email'>Password</FormLabel>
            <Input style={{width:"90%",margin:"2%"}}  id='email' name='password' type='password' onChange={handleChange} />
            <FormLabel htmlFor='email'>Select user</FormLabel>    
            <Select style={{width:"90%",margin:"2%"}} id='country' name='roles' placeholder='Select user' onChange={handleChange}>
            <option>user</option>
            <option>author</option>
            </Select>
            <Button onClick={handleSubmit} style={{ marginLeft: "20%", width: "50%" }} colorScheme='teal' variant='solid' >Login</Button>
    </FormControl>
    </ChakraProvider>
        </>
    )
}