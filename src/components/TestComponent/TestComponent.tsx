import React, { useState } from "react";
import "./TestComponent.css";

function TestComponent(props: { name: string }): any {

    const [age, setAge] = useState(23);

  return (
    <div className="TestComponent">
      Olá {props.name}, vc tem {age}.
      <button onClick={() => {
        setAge(age + 1)
        console.log(age)
      }}>+</button>
    </div>
  );
}

export default TestComponent;
