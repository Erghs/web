import React, { Component } from "react";
class ClassHello extends React.Component {
    render() {
        this.props.name = "Tom";
        return <h1>Привет, {this.props.name}</h1>;
    }
}

