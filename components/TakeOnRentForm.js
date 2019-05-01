import { Input,Form, Button,Message } from 'semantic-ui-react';
import  React ,{ Component } from 'react';
import RentContract from '../ethereum/rentContract';
import { Router } from '../routes';
import connectWeb from '../ethereum/web3';

class TakeOnRentForm extends Component {
  state = {
    value: '',
    days:'',
    buttonLoading: false,
    messageError: ''
  };

  onSubmitForm = async event => {
    event.preventDefault();
    const rent = RentContract(this.props.address);
    this.setState({ buttonLoading: true, messageError: '' });
    let passTime=new Date(Date.now()+(this.state.days*60*1000));
    try {
      await ethereum.enable();
      const accounts = await connectWeb.eth.getAccounts();
      await rent.methods.takeRent(this.state.days,passTime.getTime().toString()).send({
        value: this.state.value,
        from: accounts[0],
        gas: 1000000
      });

      Router.replaceRoute(`/rents/${this.props.address}`);
    } catch (err) {
      this.setState({ messageError: err.message });
    }

    this.setState({ buttonLoading: false, value: '' });
  };


  render() {
    return (
      <Form error={!!this.state.messageError} onSubmit={this.onSubmitForm} >
        <Form.Field>
          <label>Enter Number of Days</label>
          <Input
            value={this.state.days}
            type='number'
            min={1}
            label="time"
            onChange={event => this.setState({ days: event.target.value })}
            labelPosition="right"
          />
        </Form.Field>

        <Form.Field>
          <label>Amount to be paid: - {this.state.value=(Number(this.state.days)*Number(this.props.rentPerDay)+Number(this.props.security))} wei</label>
        </Form.Field>
        <Message error header="Oops!" content={this.state.messageError} />
        <Button loading={this.state.buttonLoading} primary>
          Pay!
        </Button>
      </Form>
    );
  }
}

export default TakeOnRentForm;
