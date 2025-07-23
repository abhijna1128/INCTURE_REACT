import { useState } from "react";

function CourseList(){
    const [courses,setCourses]=useState([
        {id:100,name:'Javascript'},
         {id:200,name:'React'},
          {id:300,name:'DBMS'},
           {id:400,name:'Cybersecurity'},

    ])
    const handleDeletebutton=(id)=>{
        const newCourse=courses.filter((c)=>c.id!==id);
    setCourses(newCourse);
    }
    return(
        <div>
            <h2> Course List:</h2>
            {
                courses.map((c)=>(
                <div key={c.id}>{c.name}
                <button onClick={()=>handleDeletebutton(c.id)}>Delete Button</button>
                 </div>
                )
            )
}
</div>
    )
}
export default CourseList;
