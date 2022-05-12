import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";

class App extends Component {
  state = {
    fields: {},
  };

  onSubmit = fields => {
    console.log("App has: ", fields);
    this.setState({ fields });
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}
export default App;
