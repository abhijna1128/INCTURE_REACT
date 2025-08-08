// function Card(props){
//     return(
//         <div>
//             <h2>Welcome: {props.name}</h2>
//             <p>City: {props.city}</p>
//         </div>
//     )
// }
// export default Card;

// function Card({name,city}){
//     return(
//         <div>
//             <h2>Welcome: {name}</h2>
//             <p>City: {city}</p>
//         </div>
//     )
// }
// export default Card;

function Card(props){
    return(
        <div>
            <h2>Card component:</h2>
            <button onClick={props.onClick}>{props.label}</button>
        </div>
    )
}
export default Card;
