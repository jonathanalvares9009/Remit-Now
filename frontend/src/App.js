import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";
import login from "./utils/login";
import DecentralBank from "abi/DecentralBank.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x00000",
      isLoggedIn: false,
      balance: "0",
      receiverAccounts: [],
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

    let accounts = [
      "0x28684A005C202a600D43f70940660E2Ce16A1fd5",
      "0x834d959DaFf41c3B9f7F714174d4456F25C71A43",
      "0x8276B5Ec18424447a92895C65961f3484F0D8e29",
      "0x5Faf18c9ac48F444a09ef7ccDDf4631951cab402",
      "0x71b3e4801cE451C462ab4Bf9f241ec535c382443",
      "0xC11eCA95848133C0F86724a10166dc58285c4c64",
      "0x97109039Fba698D308c0df1eF30D9cd9Fc0798a7",
      "0x80055cED9d44c5F3248beB718b5852042bb2C175",
      "0x7856ac2020fbc76C273CC2A8751a28AdB735B553",
      "0x742c8022932E75Bac2aE4ac6BC9E43A2B2279C4E",
    ];

    // Get network ID
    const networkID = await web3.eth.net.getId();

    const account = await window.web3.eth.getAccounts();

    // Load DecentralBank contract
    const decentralBankData = await DecentralBank.networks[networkID];
    if (decentralBankData) {
      const decentralBank = new web3.eth.Contract(
        DecentralBank.abi,
        decentralBankData.address
      );
      let decentralBankBalance = await decentralBank.methods
        .account(account[0])
        .call();
      this.setState({ balance: decentralBankBalance.toString() });
    } else {
      window.alert("DecentralBankbalance not deployed");
    }

    accounts = accounts.filter((acc, index) => !acc.includes(account[0]));

    this.setState({ receiverAccounts: accounts });
  }

  render() {
    return (
      <div className="App">
        <Header
          balance={this.state.balance}
          account={this.state.account}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Body
          sender={this.state.account}
          receiverAccounts={this.state.receiverAccounts}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
