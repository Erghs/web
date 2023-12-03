function Hello(props) {
    return <div>
              <p>Имя: {props.name}</p>
              <p>Возраст: {props.age}</p>
      </div>;
  }

Hello.defaultProps = {name: "Tom", age: 22};

export default Hello;
