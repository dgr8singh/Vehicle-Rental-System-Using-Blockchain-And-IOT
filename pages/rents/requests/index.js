import React, { Component } from 'react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import RentContract from '../../../ethereum/rentContract';
import { Form, Button, Input, Message,Checkbox } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const rents = RentContract(props.query.managerAddress);
    const summary = await rents.methods.getSummary().call();

    return {
      managerAddress: props.query.managerAddress,
      security: summary[1],
      availablity: summary[2],
      description: summary[3],
      popularity: summary[4],
      rentPerDay: summary[5],
      name: summary[6]
    };
  }

  state = {
    managerAddress: this.props.managerAddress,
    showName: this.props.name,
    minimumSecurity: this.props.security,
    description: this.props.description,
    rentPerDay: this.props.rentPerDay,
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      await ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const rents = RentContract(this.state.managerAddress);
      await rents.methods
        .editDetails(this.state.showName,this.state.minimumSecurity,this.state.description,this.state.rentPerDay,true)
        .send({
          from: accounts[0]
        });
      Router.replaceRoute(`/rents/${this.props.managerAddress}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h3>Edit your vehicle details</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Name of vehicle</label>
          <Input
            label="Short Name"
            labelPosition="right"
            value={this.state.showName}
            onChange={event =>
              this.setState({ showName: event.target.value })}
          />
        </Form.Field>
          <Form.Field>
            <label>Minimum Security Amount</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumSecurity}
              onChange={event =>
                this.setState({ minimumSecurity: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Address and description of Vehicle</label>
            <Input
              label="Complete Details"
              labelPosition="right"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Rent Per Day</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.rentPerDay}
              onChange={event =>
                this.setState({ rentPerDay: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Edit Details!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestIndex;
