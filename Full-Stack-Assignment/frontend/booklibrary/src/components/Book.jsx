import {useState,useEffect} from "react";

import { useParams } from "react-router-dom";

import styled from 'styled-components';

const Container = styled.div`
width: 80%;
padding: 10px;
display: grid;
grid-template-columns: 40% 60%;
text-align: left;
margin: auto;
margin-top: 100px;
border-radius: 10px;

`
const Image = styled.img`
width: 80%;
height: 400px;
margin-top:5%
`

const Box = styled.div`
text-align: left;
margin-left: 15px;
`
const P = styled.p`
color: #121212;
font-weight: 600;
font-size: 19px;
`

export const BookDetails = () => {
    let {id} = useParams();

    const [data, setData] = useState({});
    
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        let res = await fetch(`https://full-stack-assignments.herokuapp.com/books/${id}`);
        let d = await res.json();
        setData(d);
        console.log(d);
    }
  

    return (
        <Container>
            <Image src={data.thumbnailUrl} alt=""/>
            <Box>
            <P style={{color: '#1572A1',fontSize:"30px",fontWeight:"bold"}}>{data.title}</P>
            <P style={{color:"#086E7D"}}>By- {data.authors}</P>
                <label style={{color: '#7A0BC0',fontSize:"25px",fontWeight:"500",textDecoration:"underline"}}>Short Description:-</label>
            <P style={{height: '200px',overflow:"auto"}}>{data.longDescription}</P>
            
            </Box>
        </Container>
    )
}