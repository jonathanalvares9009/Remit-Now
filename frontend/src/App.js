import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";
import login from "./utils/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x00000",
      isLoggedIn: false,
    };
  }

  async UNSAFE_componentWillMount() {
    await login();
    if (window.web3) {
      const account = await window.web3.eth.getAccounts();
      this.setState({ account: account[0] });
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          balance="0"
          account={this.state.account}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
