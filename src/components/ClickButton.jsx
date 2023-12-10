import React, { Component } from "react";

function ClickButton(props) {
             
    function press(){
        console.log(e); // выводим информацию о событии
        alert("Hello React!")
    }
    return <button onClick={press}>Click</button>;
}

export default ClickButton;