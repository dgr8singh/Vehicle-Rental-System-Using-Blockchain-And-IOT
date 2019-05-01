// import solc compiler and other libraries
const fs = require('fs-extra');
const solc = require('solc');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');
//sync with buildPath
fs.removeSync(buildPath);

const RentPath = path.resolve(__dirname, 'contracts', 'Rent.sol');
//Read Rent.sol file
const source = fs.readFileSync(RentPath, 'utf8');
// now compile Rent.sol file
const output = solc.compile(source, 1).contracts;
// if buildPath not exists make one
fs.ensureDirSync(buildPath);
// now write each contract into diff jason files
for (let newcontract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, newcontract.replace(':', '') + '.json'),
    output[newcontract]
  );
}
