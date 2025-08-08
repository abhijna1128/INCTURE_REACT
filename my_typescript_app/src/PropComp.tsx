

interface MyProps{
    name:string;
}
// const PropComp:React.FC<MyProps>=({name})=>{  ///destructuring .........this is the recommended way
const PropComp=(props:MyProps)=>{         //not destructuring 
     return(
        <div>
            <h1>PropComp in Typescript:</h1>
            <p>Name:{props.name}</p>
            
        </div>
    )
}
export default PropComp;

// function PropComp(props){
//     return(
//         <div>
//             <h1>PropComp in Typescript:</h1>
//             <p>Name:{props.name}</p>
            
//         </div>
//     )
// }
// export default PropComp;