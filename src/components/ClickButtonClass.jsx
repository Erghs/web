import React, { Component } from "react";
class ClickButtonClass extends React.Component {
              
    // constructor(props) {
    //     super(props);
    //     this.press = this.press.bind(this);
    // }
    // press(){
    //     console.log(this);
    //     alert("Hello React!")
    // }
    // render() {
    //     return <button onClick={this.press}>Click</button>;
    // }
   
        // press(){
        //     console.log(this);
        //     alert("Hello React!");
        // }
        // render() {
        //     return <button onClick={() => this.press()}>Click</button>;
        // }

        constructor(props) {
            super(props);
            this.state = {counter: 0};
               
            this.press = this.press.bind(this);
        }
        incrementCounter(prevState, props) {
               return {
                 counter: prevState.counter + parseInt(props.increment)
               };
         }
        press(){
            this.setState(this.incrementCounter);
            this.setState(this.incrementCounter);
        }
        render() {
            return <div>
                     <button onClick={this.press}>Count</button>
                     <div>Counter: {this.state.counter}<br /> Increment: {this.props.increment}</div>
             </div>
        }
    
}

export {ClickButtonClass};

