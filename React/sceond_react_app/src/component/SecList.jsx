function SecList(){
    const students=[
        {id:111,name:"Abhi",city:"Puttur"},
        {id:222,name:"Shree",city:"Bantwal"},
        {id:333,name:"Krithika",city:"Mangalore"},
        {id:444,name:"Krishna",city:"Mura"}
    ]
    return(
        <div>
            <h2>Student List:</h2>
            {
                students.map((student)=>
                <p key={student.id}>Name: {student.name} City:{student.city}</p>)
            }

        </div>
    )
}
export default SecList;