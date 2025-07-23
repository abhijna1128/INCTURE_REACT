function TableList(){
     const students=[
        {id:111,name:"Abhi",city:"Puttur"},
        {id:222,name:"Shree",city:"Bantwal"},
        {id:333,name:"Krithika",city:"Mangalore"},
        {id:444,name:"Krishna",city:"Mura"}
    ]
    return(
        <div>
            <h2>Student Table:</h2>
            <table border="2" cellPadding="10" cellSpacing="0">
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default TableList;