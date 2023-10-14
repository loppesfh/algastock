import { useEffect, useState } from "react";
import "./TestComponent.css";

function TestComponent(props: { name: string }): any {
  const [age, setAge] = useState(23);
  useEffect(() => {
    console.log("component was created")
  }, [])

  useEffect(() => {
    console.log('Age has been updated to: ' + age)
  }, [age])
  
  return (
    <div className="TestComponent">
      Olá {props.name}, vc tem {age}.
      <button
        onClick={() => {
          setAge(age + 1);
          console.log(age);
        }}
      >
        +
      </button>
    </div>
  );
}

export default TestComponent;
