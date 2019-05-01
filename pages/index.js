import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import RentContract from '../ethereum/rentContract';

class RentContractIndex extends Component {
  static async getInitialProps() {
    const listOfRents = await factory.methods.returnDeployedList().call();
    const promiseArray = listOfRents.map(async (address) => {
      const rent = RentContract(address);
      const valueofpopularity = await rent.methods.popularity().call();
      const valueofname = await rent.methods.getName().call();
      const valueofavailablity = await rent.methods.getAvailablity().call();
      return {
        keys: "values",
        addr: address,
        name: valueofname,
        availablity: valueofavailablity,
        popularity: valueofpopularity
      };
    });
    const finalresults = await Promise.all(promiseArray);
    return { finalresults };
  }
  giveAvailability(check){
    if(check){
      return "available";
    }
    else{
      return "unavailable";
    }
  }
  getColor(check){
    if(check){
      return "green";
    }
    else{
      return "red";
    }
  }
  renderRentContracts() {
    const items = this.props.finalresults.map((result) => {
      return {
        header: <div style={{fontSize: '24px', color:'black'}}><h1>{result.name}</h1></div>,
        description: (
          <div style={{color: this.getColor(result.availablity), fontSize: '20px'}}>
          <br></br>
          vehicle  {this.giveAvailability(result.availablity)}
          <br></br><br></br>
          <Link route={`/rents/${result.addr}`} >
            <a>Check Details</a>
          </Link>
          </div>
        ),
        meta: <div style={{fontSize: '16px', color:'maroon'}}>popularity of vehicle - {result.popularity}</div>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Registered Vehicles</h3>
          <Link route="/rents/new">
            <a>
              <Button
                content="Rent your vehicle"
                floated="right"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderRentContracts()}
        </div>
      </Layout>
    );
  }
}

export default RentContractIndex;
