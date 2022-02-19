import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import {Link} from "react-router-dom"


import "./home.css"


export const Home = () => {
    const [set, setData] = useState([]);
    const [page,setPage] = useState(1)

    useEffect(() => {
        getData(page)
    },[page])

    const getData = async(page) => {
        let res = await fetch(`https://full-stack-assignments.herokuapp.com/books?page=${page}&size=5`);
        let data = await res.json();
        console.log(data);
        setData(data.books);
    }

    
  

    return (
      
        <div className="MainTable">
        <ChakraProvider>
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
        <Td >{e.categories[0]}</Td>
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





