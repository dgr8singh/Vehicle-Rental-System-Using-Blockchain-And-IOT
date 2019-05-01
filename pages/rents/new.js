import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    showName: '',
    minimumSecurity: '',
    description: '',
    rentPerDay: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      await ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createRent(this.state.minimumSecurity,this.state.description,this.state.rentPerDay,this.state.showName)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Register your vehicle</h3>

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
            <label>Address and Description of Vehicle</label>
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
            register!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
