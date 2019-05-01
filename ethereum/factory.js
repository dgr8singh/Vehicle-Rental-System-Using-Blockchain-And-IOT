
import web3 from './web3';
import RentFactory from './build/FactoryRent.json';

const instance = new web3.eth.Contract(
  JSON.parse(RentFactory.interface),
  '0xA6BCEBF14CA4A909b73E53B0e876BdAb4bAD3Be0'
);

export default instance;
