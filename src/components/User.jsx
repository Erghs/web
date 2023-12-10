import React, { Component } from "react";


function User() {
    const [name, setName] = React.useState("Tom");
    const [age, setAge] = React.useState(36);
      
    React.useEffect(() => {    
      // Изменяем заголовок html-страницы   
      document.title = `Привет ${name}`;  
      console.log("useEffect");
    },
    [name]); // эффект срабатывает только при изменении name
      
    const changeName = (event) => setName(event.target.value);
    const changeAge =(event) => setAge(event.target.value);
     
    return (
      <div>
        <h3>Имя: {name}</h3>
        <h3>Возраст: {age}</h3>
          
        <div>
          <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
          <p>Возраст: <input type="number" value={age} onChange={changeAge} /></p>
        </div>
      </div>
    );
  }
   

  export default User;