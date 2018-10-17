import React, { Component } from "react";
import AuthForm from "./auth/AuthForm";
import SiteBar from "./home/Navbar";
import Splash from "./home/Splash";
import Division from "./home/Division";
import SuperBowlWinners from "./home/SuperBowlWinners";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ""
    };
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = token => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  logout = () => {
    this.setState({
      sessionToken: ""
    });
    localStorage.clear();
  };

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Switch>
          <Route path="/" exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/Division"><Division token={this.props.sessionToken} /></Route>
          <Route path="/SuperBowlWinners"><SuperBowlWinners token={this.props.sessionToken} itemId={this.handleItemIdClick} />
          </Route>
        </Switch>
      );
    } else {
      return (
        <Route path="/AuthForm">
          <AuthForm setToken={this.setSessionState} />
        </Route>
      );
    }
  };

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
