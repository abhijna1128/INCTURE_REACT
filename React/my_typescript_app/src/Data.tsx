
function Data(){
    let userName:string="Abhijna";
    let age:number=30;
    let isActive:boolean=true;
    const course:string[]=["React","Angular","vue"];

    type Employee={
        id:number;
        name:string;
        city:string;
    }
    const emp1:Employee ={
        id:100,
        name:"ABC",
        city:"Mangalore"
    }


    return(
        <div>
            <h2>User profile: </h2>
            <p>Name: {userName}</p>
            <p>Age:{age}</p>
            <p>Is Active: {isActive ? "YES" : "NO"}</p>
            <p>Employee ID:{emp1.id}</p>
            <p>Employee Name:{emp1.name}</p>
            <ul>
                {course.map((c,index)=>(
                    <li key={index}>
                        {c}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default Data;
