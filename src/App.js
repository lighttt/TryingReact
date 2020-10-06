import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Manish", age: 22 },
      { name: "Sanjay", age: 29 },
    ],
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Sanjay", age: 29 },
        { name: "Manish", age: 22 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Some value
      </Person>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm react developer")
  // );
};

export default App;
