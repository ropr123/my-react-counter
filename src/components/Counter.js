import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state= {
             type: this.props.type,
             val: (this.props.type === 'even' || this.props.type === 'normal') ? 0 : 1,
              inc: (this.props.type === 'even' || this.props.type === 'odd') ? 2 : 1 
        };
    }
    
    // componentDidMount(){
    //     this.setState({
    //         type: this.props.type,
    //         val: (this.props.type === 'even' || this.props.type === 'normal') ? 0 : 1,
    //          inc: (this.props.type === 'even' || this.props.type === 'odd') ? 2 : 1 
    //      });
    // }
    

    incrementCount = () => {
        let newval = this.state.val + this.state.inc;
        this.setState({val:newval});
    }


    decrementCount = () => {
        let newval = this.state.val - this.state.inc;
        this.setState({val:newval});
    }    

    render(){
        return(
            <div>
            <h2>{this.state.type} Counter</h2>
            {this.state.val}<br/>
            <button onClick={this.incrementCount}>+</button>
            <button onClick={this.decrementCount}>-</button>
            </div>
        )
    }
}

export default Counter;

