import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";
import login from "./utils/login";
import DecentralBank from "./backend/truffle_abis/DecentralBank.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x00000",
      isLoggedIn: false,
      balance: "0",
      component: "",
    };
  }

  async UNSAFE_componentWillMount() {
    await login();
    if (window.web3) {
      await this.loadBlockchainData();
      const account = await window.web3.eth.getAccounts();
      this.setState({ account: account[0] });
      this.setState({ isLoggedIn: true });
      this.setState({
        component: (
          <>
            <Header
              balance={this.state.balance}
              account={this.state.account}
              isLoggedIn={this.state.isLoggedIn}
            />
            <Body sender={this.state.account} />
            <Footer />
          </>
        ),
      });
    } else {
      this.setState({
        component: (
          <h1 style={{ textAlign: "center", color: "white" }}>
            This website cannot be used without metamask. Please download
            metamask and reload the page.
          </h1>
        ),
      });
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    // Get network ID
    const account = await window.web3.eth.getAccounts();

    // Load DecentralBank contract
    const decentralBank = new web3.eth.Contract(
      DecentralBank.abi,
      "0xB32900E517B1ad2115fF7c501Fa836D0C891D265"
    );
    let decentralBankBalance = await decentralBank.methods
      .account(account[0])
      .call();
    this.setState({ balance: decentralBankBalance.toString() });
  }

  render() {
    return <div className="App">{this.state.component}</div>;
  }
}

export default App;
