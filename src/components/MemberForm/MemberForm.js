import React, { Component } from "react";
import "./MemberForm.css";

// Component for the Navbar

class MemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '',
                  class:'hide',
                  lastName:''
                };

    this.fistNameChange = this.fistNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fistNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  lastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.firstName} ${this.state.lastName} `);
    event.preventDefault();
  }

  render() {
    return (
      <div className={`member-form ${!this.props.hide ? this.state.class : ""}`}>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input  className="member-name" placeholder="LAST NAME" type="text" value={this.state.firstName} onChange={this.fistNameChange} />
          <input  className="member-name" placeholder="FIRST NAME" type="text" value={this.state.lastName} onChange={this.lastNameChange} />
        </label>
        <input type="submit" value="SUBMIT" id="submit" />
      </form>
      </div>
    );
  }
}

export default MemberForm;
