import React,{Component} from "react";

class LifeCycle1 extends Component{
constructor(props)
    {
        super(props);
        console.log("ChildComponent: Constructor");

        this.state={
        count:0

    };
    
    }
     render(){
        // console.log("render() method called...");
        return(
            <div>
                <h1>Life cycle Methods of class components</h1>
                <h3>Count :{this.state.count}</h3>
                <button onClick={()=>this.setState({cont:this.state.count+1})}>Increment</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("ChildComponent: Component Did Mount")
    }
    }
    export default LifeCycle1;