function NameList2(){
    const persons=[
        {id:111,name:"Abhijna",age:22},
        {id:222,name:"Shreelakshmi",age:23},
        {id:333,name:"Krithika",age:21},
        {id:444,name:"Krishna",age:24}
    ]
    return(
        <div>
            <h2>Names Table:</h2>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default NameList2;