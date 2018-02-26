import React, { Component } from "react";
import "./GuestForm.css";

// Component for the Navbar

class GuestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  class:'hide'
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={`form ${!this.props.hide ? this.state.class : ""}`}>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input id="name" placeholder="NAME" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="SUBMIT" id="submit" />
      </form>
      </div>
    );
  }
}

export default GuestForm;
