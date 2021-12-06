import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";
import login from "./utils/login";
import DecentralBank from "./truffle_abis/DecentralBank.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x00000",
      isLoggedIn: false,
      balance: "0",
    };
  }

  async UNSAFE_componentWillMount() {
    await login();
    await this.loadBlockchainData();
    if (window.web3) {
      const account = await window.web3.eth.getAccounts();
      this.setState({ account: account[0] });
      this.setState({ isLoggedIn: true });
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    // Get network ID
    // const networkID = await web3.eth.net.getId();

    const account = await window.web3.eth.getAccounts();

    // Load DecentralBank contract
    // const decentralBankData = await DecentralBank.networks[networkID];
    // if (decentralBankData) {
    const decentralBank = new web3.eth.Contract(
      DecentralBank.abi,
      "0xB32900E517B1ad2115fF7c501Fa836D0C891D265"
    );
    let decentralBankBalance = await decentralBank.methods
      .account(account[0])
      .call();
    this.setState({ balance: decentralBankBalance.toString() });
    // } else {
    //   window.alert("DecentralBankbalance not deployed");
    // }
  }

  render() {
    return (
      <div className="App">
        <Header
          balance={this.state.balance}
          account={this.state.account}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Body sender={this.state.account} />
        <Footer />
      </div>
    );
  }
}

export default App;
