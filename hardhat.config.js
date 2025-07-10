require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  networks: {
    bnbTestnet: {
      url: process.env.BNB_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.19",
};
