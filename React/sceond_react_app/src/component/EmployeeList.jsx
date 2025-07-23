import EmployeeCard from "./EmployeeCard.jsx"

function EmployeeList(){
    const employees=[
        {id:111,name:"Abhi",city:"Puttur"},
        {id:222,name:"Shree",city:"Bantwal"},
        {id:333,name:"Krithika",city:"Mangalore"},
        {id:444,name:"Krishna",city:"Mura"}
    ]
    return(
        <div>
            <h2>Employee List:</h2>
            {
                employees.map((employee)=>
                <EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>)
            }

        </div>
    )
}

export default EmployeeList;