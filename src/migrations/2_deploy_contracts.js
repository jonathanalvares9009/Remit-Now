const DecentralBank = artifacts.require("DecentralBank.sol");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(DecentralBank);
  //   const decentralBanl = await DecentralBank.deployed();
};
