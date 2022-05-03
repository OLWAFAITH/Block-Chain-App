//https://eth-ropsten.alchemyapi.io/v2/wQwKyueuherj1NuIGIiqPCdLfTYYtxoR

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wQwKyueuherj1NuIGIiqPCdLfTYYtxoR',
      accounts: ['f6d4f89e7e2f749a2d48003d35fb119823a08649683a2fcb29918068beea0874'],
    },
  },
};