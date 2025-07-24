import React,{Component} from "react";

class LifeCycle2 extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
        }
        shouldComponentUpdate(nextProps,nextState){
        console.log("ChildComponent: Should Component Update")
        return true;
        }
        componentDidUpdate(prevProps,prevState,snapshot){
            console.log("ChildComponent: Component Did Update;");

        }
        render(){
            // console.log("render() method called...");
            return(
                <div>
                    <h1>Updating Phase:</h1>
                    <h2>Value:{this.state.value}</h2>
                    <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
                </div>
            )
        }

    }
    export default LifeCycle2;
