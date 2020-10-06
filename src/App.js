import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Manish", age: 22 },
      { name: "Sanjay", age: 29 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Sanjay", age: 29 },
        { name: "Manish", age: 22 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
  }
}

export default App;
