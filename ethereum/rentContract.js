// import compiled Rent Contract
import RentContract from './build/Rent.json';
import web3 from './web3';

export default contractAddress => {
  return new web3.eth.Contract(JSON.parse(RentContract.interface), contractAddress);
};
