import DecentralBank from "../truffle_abis/DecentralBank.json";

async function transferMoney(e) {
  e.preventDefault();
  const from = e.target[0].value;
  const to = e.target[1].value;
  const amount = e.target[2].value;

  const web3 = window.web3;

  const account = await window.web3.eth.getAccounts();
  // Get network ID
  //   const networkID = await web3.eth.net.getId();

  // Load DecentralBank contract
  //   const decentralBankData = await DecentralBank.networks[networkID];
  //   if (decentralBankData) {
  const decentralBank = new web3.eth.Contract(
    DecentralBank.abi,
    "0xB32900E517B1ad2115fF7c501Fa836D0C891D265"
  );
  const transfer = () => {
    decentralBank.methods
      .transferToAccount(from, to, amount)
      .send({ from: account[0] });
  };
  transfer();
  //   } else {
  //     window.alert("DecentralBankbalance not deployed");
  //   }

  document.getElementById("form").reset();
  window.location.reload();
}

export default transferMoney;
