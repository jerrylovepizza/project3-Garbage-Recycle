import React, { Component } from "react";
// import { Button } from "reactstrap";
import API from "../../utils/API";
import "./Home.scss";
import background from "./sortingGarbageApp.png";



class Home extends Component {

  state = {
    loggedIn: false,
    
  };

  
  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={background} style={{height:520 }} alt="your alt text here" />
        </div>
    );
  }
}

export default Home;