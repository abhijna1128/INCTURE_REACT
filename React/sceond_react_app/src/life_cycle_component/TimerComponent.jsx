import React,{Component} from "react";

class TimerComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            seconds:0
        };
        console.log("Constructor is called...");
    }
    componentDidMount(){
        console.log("Timer Component Mounted...");
        this.interval=setInterval(()=>{
            this.setState({seconds:this.state.seconds+1});
        },1000);
    }
    componentWillUnmount(){
        console.log("Component will unmount.Clearing interval...");
        clearInterval(this.interval);
    }
render(){
    return(
        <div>
            <h2>Timer COmponent:</h2>
            <h3>Timer: {this.state.seconds}seconds</h3>
        </div>
    )
}
}
export default TimerComponent;