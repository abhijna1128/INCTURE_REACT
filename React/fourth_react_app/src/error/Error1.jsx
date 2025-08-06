function Error1(props){
   try{

    //throw new Error("its error");
   }
   catch{
    return <p> Some error occured in first error component</p>
   }
    return(
        <div>
            <h2>This is first Component from Error Folder</h2>
            <h3>{props.name}</h3>

        </div>
    )
}
export default Error1;
