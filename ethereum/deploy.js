// import libraries
const factoryCompiled = require('./build/FactoryRent.json');
const HDWalletProvider = require('truffle-hdwallet-provider');
// get web3 instance with metamask
const Web3 = require('web3');

const web3provider = new HDWalletProvider(
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

const instanceOfWeb3 = new Web3(web3provider);

const deploy = async () => {
  const listOfAccounts = await instanceOfWeb3.eth.getAccounts();

  console.log('Trying to deploy from this account address', listOfAccounts[0]);

  const deployed = await new instanceOfWeb3.eth.Contract(
    JSON.parse(factoryCompiled.interface)
  )
    .deploy({ data: '0x'+factoryCompiled.bytecode })
    .send({ from: listOfAccounts[0] , gas: '2000000', });

  console.log('Factory Contract is deployed at address', deployed.options.address);
};
deploy();
