function addTask(){
    let obj=document.getElementsByClassName("add");
    let input=obj.value;
        if(input!=""){
            let objadd=document.getElementById("task");
            input.push(objadd);
        }
    }