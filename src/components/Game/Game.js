import React, { Component } from "react";
import Line from "../Line";
import Container from "../Container";
import Guest from "../Guest";
import Member from "../Member";
import Scan from "../Scan";
import GuestForm from "../GuestForm";
import MemberForm from "../MemberForm";
import Footer from "../Footer";
import IDNum from "../IDNum";
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
                     right:true,
                     guest: false,
                     center: false
                   });
    } else if(id == "guest") {
      this.setState({guest: true, 
                     left: true,
                     right: false,

                     member: false,
                   center: false});
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
              move={!this.state.center ? (this.state.member ? "member-chosen" : "minimize-member") : ""}
            />
              <Line
                right={!this.state.center ? (this.state.left ? "left" : "right") : ""}
               />

            <Guest
              handleClick={this.handleItemClick}
              id={"guest"}
              image={this.state.data[1].image}
              move={!this.state.center ? (this.state.guest ? "guest-chosen" : "minimize-guest") : ""}

            />
            <GuestForm
              hide={this.state.left} 
             />
             <MemberForm
              hide={this.state.right} 
             />
              <Scan
             handleClick={this.handleItemClick}
              id={"member"}
             image={this.state.data[2].image}
              move={!this.state.center ? (this.state.member ? "member-active" : "hide") : "hide"} 
             
             />
        </Container>
    );
  }
}

export default Game;
