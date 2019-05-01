// specific version of solidity
pragma solidity ^0.4.17;

// this contract used to deploy and manage other contracts
//this contract deployed only once by website host
contract FactoryRent{
  // records of Rent Contract deployed
  address[] public RentDeployed;
  // Records of managers who deployed Rent Contract
  mapping(address => address[]) managerContractList;
  // true if manager exists
  mapping(address => bool) managerList;
  // no managers which are lessor
  uint public managerCount;
 // constructor
  function FactoryRent() public {
    managerCount=0;// initial value
  }

  // function for creating Rent Contract by manager
  function createRent(uint sec,string desc,uint rnt,string nme) public{
    address newRent = new Rent(sec,desc,rnt,nme,msg.sender);
    RentDeployed.push(newRent);
    managerContractList[msg.sender].push(newRent);
    if(!managerList[msg.sender]){
      managerCount++;
    }
    managerList[msg.sender]=true;
  }

  // only manager can delete this contract
  // its updates managerContractList after deleting Rent Contract
  function deleteRent(address toDelete) public {
    require(managerList[msg.sender]);
    bool flag=false;
    for(uint i=0;i<managerContractList[msg.sender].length;i++){
        if(managerContractList[msg.sender][i]==toDelete){
          flag=true;
        }
    }
    require(flag);
    uint index;
    // now delete from list of deployed rent contracts
    for(uint j=0;j<RentDeployed.length;j++){
      if(RentDeployed[j]==toDelete){
        index=j;
      }
    }
    if(RentDeployed.length>1){
      RentDeployed[index]=RentDeployed[RentDeployed.length-1];
    }
    RentDeployed.length--;
  }

  // get all deployed Rent Contract
  function returnDeployedList() public view returns (address[]){
    return RentDeployed;
  }
  // check manager exists or not
  function searchManager(address mngr) public view returns(bool){
    return managerList[mngr];
  }
  // list of all contracts deployed by manager
  function getManagerContracts(address mngr) public view returns(address[]){
    return managerContractList[mngr];
  }

}

// main contract which handles all information about renting vehicle
//this contract distribute money to managers and renters
contract Rent{
  address public manager;// who deployed this contract
  string name;// short name of Vehicle
  uint public security;// security money
  bool public availablity;
  string public description; // full description about vehicle
  address[] public pastRents;// list of peoples who rent this vehicles
  uint public popularity;// how many times vehicle rented
  uint public rentPerDay;
  string public rentingTime;//time at which he take vehicle at rent
  uint public timeOfRent;// amount of time for rent

  // restrict permissions only manager can access
  modifier restricted() {
      require(msg.sender == manager);
      _;
  }

  // constructor to set initial properties
  function Rent(uint sec,string desc,uint rnt,string nme,address creator) public{
    security=sec;
    name=nme;
    manager=creator;
    description=desc;
    availablity=true;
    popularity=0;
    rentPerDay=rnt;
    rentingTime="";
    timeOfRent=0;
  }

  // take vehicle on rent
  // this method send money to contract
  function takeRent(uint dys,string curentTime) public payable{
    uint total=dys*rentPerDay+security;
    require(msg.value>=total);
    require(availablity);
    timeOfRent=dys;
    rentingTime=curentTime;
    availablity=false;
    popularity++;
    pastRents.push(msg.sender);
  }

  // manager can edit details about vehicle
  function editDetails(string newname,uint newsecurity,string newDescription,uint newrentPerDay,bool newstatus) public restricted{
    name = newname;
    security=newsecurity;
    description=newDescription;
    rentPerDay=newrentPerDay;
    availablity=newstatus;
  }
  /*
  function editName(string newName) public restricted{
    name=newName;
  }
  function editSecurity(uint newSecurity) public restricted{
    security=newSecurity;
  }

  function editAvaialblity(bool newAvaialble) public restricted{
    availablity=newAvaialble;
  }

  function editDescription(string newDescription) public restricted{
    description=newDescription;
  }

  function editRentPerDay(uint newRentPerDay) public restricted{
    rentPerDay=newRentPerDay;
  }
*/
// return security amount to renter
// rentpay send to manager of contract
  function returnSecurity() public {
    uint len=pastRents.length;
    require(msg.sender == pastRents[len-1]);
    msg.sender.transfer(security);
    manager.transfer(this.balance);
    availablity=true;
    rentingTime="";
    timeOfRent=0;
  }
// get short name of the vehicle
  function getName() public  view returns(string){
    return name;
  }

  // to deduct certain amount of money from security
  function cutSecurity(uint amountTobeDeduct) public{
    uint len=pastRents.length;
    require(msg.sender == pastRents[len-1]);
    if(amountTobeDeduct<security){
      msg.sender.transfer(security- amountTobeDeduct);
    }
    manager.transfer(this.balance);
    availablity=true;
    rentingTime="";
    timeOfRent=0;
  }

// to get all details about contract
  function getSummary() public view returns (
    address, uint, bool, string, uint, uint,string
    ) {
      return (
        manager,
        security,
        availablity,
        description,
        popularity,
        rentPerDay,
        name
        );
    }

    // to return availablity of vehicle
    function getAvailablity() public view returns(bool){
       return availablity;
    }
}
// 0x8BB4399B2416BFfF53157cf1f98de3295e54F400
