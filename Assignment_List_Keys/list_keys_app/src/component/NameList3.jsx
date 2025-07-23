import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function NameList3(){
    const [persons,setPersons]=useState([
         {id:111,name:"Abhijna",age:22},
         {id:222,name:"Shreelakshmi",age:23},
         {id:333,name:"Krithika",age:21},
         {id:444,name:"Krishna",age:24}

     ])
     const handleDeletebutton=(id)=>{
         alert(`Delete a Person with Id:${id}`);
         const newPerson=persons.filter((c)=>c.id!==id);
     setPersons(newPerson);
     }
    return(
        <div className='container mt-4'>
            <h2 className='head3'>Names table:</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>
                                    <Button variant="danger" size="em" 
                                    onClick={()=>handleDeletebutton(s.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>

        </div>
    )

}
export default NameList3;