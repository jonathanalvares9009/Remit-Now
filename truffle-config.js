require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", //Match any network id
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          "bind parent dad juice chicken tomorrow liberty echo town number survey sell",
          "https://ropsten.infura.io/v3/308455c3c28d431f8862a34498287a9d"
        );
      },
      network_id: 3,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/truffle_abis/",
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
