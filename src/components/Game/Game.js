import React, { Component } from "react";
import NameForm from "../NameForm";
import Line from "../Line";
import Container from "../Container";
import Guest from "../Guest";
import Member from "../Member";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {
  state = {
    data,
    member: true,
    guest: true,
    right:false,
    left: false,
    center:true
  };

  componentDidMount() {
    // this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleItemClick = id => {
    if(id == "member") {
      this.setState({member: true, 
                     left: false,
                     guest: false
                   });
    } else if(id == "guest") {
      this.setState({guest: true, 
                     left: true,
                     member: false});
    }
    

  }
    ;

  render() {
    return (
        <Container>
            <Member
              handleClick={this.handleItemClick}
              id={"member"}
              image={this.state.data[0].image}
              move={this.state.member ? "" : "member"}
            />
              <Line
                right={!this.state.center ? (this.state.left ? "left" : "right") : ""}
               />

            <Guest
              handleClick={this.handleItemClick}
              id={"guest"}
              image={this.state.data[1].image}
              move={this.state.guest ? "" : "guest"}

            />
            <NameForm />
        </Container>
    );
  }
}

export default Game;
