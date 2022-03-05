import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td ,Select} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import {Link} from "react-router-dom"


import "./home.css"


export const Home = () => {
  const [set, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [form, setForm] = useState("");
    
    const handleChange = async(e) => {
        let { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
      console.log(form);
    }
    

    useEffect(() => {
      getData()
    }, [page,form]);
  


  const getData = async () => {
    if (form.Type) {
      var res = await fetch(`http://localhost:4000/books/${form.Type}?page=${page}&size=5`)
    } else {
      var res = await fetch(`http://localhost:4000/books/?page=${page}&size=5`)
    }
    let data = await res.json();
    console.log(data);
    setData(data.books);
  }

  return (
    <div className="MainTable">
      <ChakraProvider>
        <Select
          name="Type"
          style={{width: '30%'}}
          onChange={handleChange}>
          {
            ["Select Language","Java","Software Engineering","Internet","Web Development","Microsoft .NET","Programming","Mobile Technology"].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
            ))}  
        </Select>
      <Table variant='striped' colorScheme='teal'>
      <Thead>
      <Tr>
      <Th>Book Cover</Th>
      <Th>Book Title</Th>
      <Th>Author Name</Th>
      <Th>Category</Th>
      <Th>More</Th>
      </Tr>
      </Thead>
      <Tbody>
    {
      set.map((e) => (
          <Tr style={{textAlign:"center"}} key={e._id}>
          <Td><img style={{ height: "47px" }} src={e.thumbnailUrl} alt={e.title}/></Td>
          <Td >{ e.title }</Td>
          <Td>{e.authors[0]}</Td>
          <Td >{e.categories}</Td>
          <Td><Link to={`/books/${e._id}`}><Button colorScheme='blue' variant='link'>Details</Button></Link> </Td>
          </Tr>
        ))
    }
      </Tbody>
      </Table>
          <div className="buttonDiv">
          <Button colorScheme='blue' variant='solid' disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
          <p>{ page}</p>
          <Button colorScheme='blue' variant='solid' onClick={() => setPage(page + 1)}>Next</Button>
          </div>
        </ChakraProvider>      
          </div>
  )
}





