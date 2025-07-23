import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function BootstrapTable(){
    const students=[
        {id:111,name:"Abhi",city:"Puttur"},
        {id:222,name:"Shree",city:"Bantwal"},
        {id:333,name:"Krithika",city:"Mangalore"},
        {id:444,name:"Krishna",city:"Mura"}
    ]
    const handleDeletebutton=(id)=>{
        alert(`Delete student with Id:${id}`);
    }
    return(
        <div className='container nt-4'>
            <h2 className='head3'>Student table:</h2>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.city}</td>
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
export default BootstrapTable;