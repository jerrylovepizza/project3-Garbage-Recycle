import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
// import Joke from "../../components/Joke"
import "./Home.scss";
import background from "./sortingGarbageApp.png";



class Home extends Component {

  state = {
    loggedIn: false,
    // joke: ""
  };

  // componentDidMount() {
  //   this.getJoke();
  //   this.loggedIn();
  // }

  // getJoke = () => {
  //   API.ChuckNorris().then(joke => {
  //     let newJoke = joke.data.value.joke.replace(/&quot;/g, '"');
  //     this.setState({
  //       joke: newJoke
  //     })
  //   }).catch(err => {
  //     console.log(err)
  //   });
  // }

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
            <img src={background} style={{ width: 1000 }} alt="your alt text here" />
        </div>
    );
  }
}

export default Home;