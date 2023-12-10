import React, { Component } from "react";
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), name: "Tom"};
      this.unmount = this.unmount.bind(this);
    }
    unmount(){
        root.unmount();
    }
    componentDidMount() {
      this.timerId = setInterval(
        ()=> this.tick(),
        1000
      );
      console.log("componentDidMount()");
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
      console.log("componentWillUnmount()");
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>Привет, {this.state.name}</h1>
          <h2>Текущее время {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.unmount}>Unmount</button>
        </div>
      );
    }
  }


  export {Clock}