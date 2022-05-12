import React from "react";
import "../index.css";
import "../App.css";
export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    region: "",
    occupation: "",
    username: "",
    email: "",
    password: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      region: "",
      occupation: "",
    });
  };

  render() {
    return (
      <form>
        <h1>React Form</h1>
        <input
          name="firstName"
          className="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          className="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="region"
          className="region"
          type="region"
          placeholder="Region"
          value={this.state.region}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="occupation"
          className="occupation"
          type="occupation"
          placeholder="Occupation"
          value={this.state.occupation}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="username"
          className="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          className="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          className="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button
          type="button"
          className="button"
          onClick={e => this.onSubmit(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}
