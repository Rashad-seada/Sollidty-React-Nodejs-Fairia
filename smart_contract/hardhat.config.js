
//

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    
    sepolia : {
      url : "https://eth-sepolia.g.alchemy.com/v2/yBXfRy_UITiMgcF23faxy_Wx1onVdAqr",
      accounts : ['1a9b565e1ff049ad709eedd886d410c855ba2b80ea3fd9cafbd4bb43d1fba390']
    }
  }
};
