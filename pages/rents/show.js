import firebase from 'firebase';
import React ,{ Component } from 'react';
import { Form,Button,Card,Message,Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import RentContract from '../../ethereum/rentContract';
import web3 from '../../ethereum/web3';
import TakeOnRentForm from '../../components/TakeOnRentForm';
import factory from '../../ethereum/factory'
import { Link } from '../../routes';
import { Router } from '../../routes';
var config = {
    apiKey: "AIzaSyBOXnxoeGG8qwjOuOm_hoTTTPR53VUH_qw",
    authDomain: "major-3898b.firebaseapp.com",
    databaseURL: "https://major-3898b.firebaseio.com",
    projectId: "major-3898b",
    storageBucket: "major-3898b.appspot.com",
    messagingSenderId: "706047098506"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class RentShow extends Component {
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
    buttonLoading:false,
    messageError:'',
    buttonLoading2:false,
    messageError3:'',
    messageError2: '',
    latitude:'',
    longitude:''
  };
  checkavail(availablity){
    if(availablity){
      return 'vehicle available';
    }
    else{
      return 'vehicle unavailable';
    }
  }

readUserData = async () => {
    await firebase.database().ref('Accounts/username/devices/15').once('value',(snapshot) => {
      console.log(snapshot.val());
      this.setState({
        latitude:snapshot.val().latitude,
        longitude:snapshot.val().longitude
      })
    });
    console.log(this.state.latitude);
};

  renderCards() {
    const {
      managerAddress,
      security,
      availablity,
      description,
      popularity,
      rentPerDay,
      name
    } = this.props;

    const items = [
      {
        header: managerAddress,
        meta: 'Address of Manager',
        description:
          'The manager is owner and wishes to rent his vehicle',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: 'security amount',
        meta:
          'You must give at least this much wei to rent this vehicle',
        description:
        'Minimum security to pay (wei) ' + security
      },
      {
        header: 'Availablity',
        meta: '',
        description: this.checkavail(availablity)
      },
      {
        header: 'Details',
        meta: 'give below are complete details',
        description: description
      },
      {
        header: 'popularity',
        description: '*no of time vehicle rented - ' +  popularity
      },
      {
        header: 'Rent per Day',
        meta:'' ,
        description: rentPerDay + ' per day'
      }
    ];

    return <Card.Group items={items} />;
  }
  onSubmitForm = async event => {
    event.preventDefault();

    this.setState({  messageError: '',buttonLoading: true, });

    try {
      await ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .deleteRent(this.props.managerAddress)
        .send({
          from: accounts[0]
        });
      Router.replaceRoute('/');
    } catch (err) {
      this.setState({ messageError: err.message });
    }

    this.setState({ buttonLoading: false });
  };

  onSubmitTime = async event => {
    event.preventDefault();

    this.setState({ buttonLoading: true, messageError2: '' });

    try {
        await ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const rent = RentContract(this.props.managerAddress);
      const tmp = await rent.methods.rentingTime().call();
      const timelimit = (new Date(Number(tmp))).getTime();
      if(timelimit>Date.now()){
      await rent.methods
        .returnSecurity()
        .send({
          from: accounts[0]
        });
      }
      else{
        const deductamount = parseInt((Date.now()-timelimit)/(60000));
        await rent.methods
          .cutSecurity(deductamount)
          .send({
            from: accounts[0]
          });
      }
      Router.replaceRoute(`/rents/${this.props.managerAddress}`);
    } catch (err) {
      this.setState({ messageError2: err.message });
    }

    this.setState({ buttonLoading: false });
  };
  onSubmitIOT = async event => {
    event.preventDefault();
    await this.readUserData();
    const pathlink="http://maps.google.com/maps?q="+this.state.latitude+","+this.state.longitude;
    //console.log(pathlink);
    window.open(pathlink);
  };

  renderCheck(){
    if(this.props.availablity){
      return(
        <Grid.Column>

          <Form  error={!!this.state.messageError} onSubmit={this.onSubmitForm}>
          <Link route={`/rents/${this.props.managerAddress}/requests`}>
            <a>
              <Button primary>Edit Details</Button>
            </a>
          </Link>
            <Message error header="Oops!" content={this.state.messageError} />
            <Button loading={this.state.buttonLoading} secondary >Unlist vehicle</Button>
          </Form>
        </Grid.Column>
      );
    }
    else{
      return(
        <Grid.Column style={{color:'red'}}>
          <h3>Can not edit vehicle on rent</h3>
        </Grid.Column>
      );
    }
  }
  renderColumn(){
    if(this.props.availablity){
      return (
      <Grid.Column width={6}>
        <TakeOnRentForm address={this.props.managerAddress} rentPerDay={this.props.rentPerDay} security={this.props.security} />
      </Grid.Column>
    );
    }
    else{
      return(
      <Grid.Column width={6}>
      <Form onSubmit={this.onSubmitTime} error={!!this.state.messageError2}>
        <Message error header="Oops!" content={this.state.messageError2} />
        <Button loading={this.state.buttonLoading} secondary >Request Security Fee</Button>
      </Form>
      </Grid.Column>
    );
    }
  }

  render() {
    return (
      <Layout>
        <h3>{this.props.name}</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            {this.renderColumn()}
          </Grid.Row>
          <Grid.Row>
            {this.renderCheck()}
          </Grid.Row>
          <Grid.Row>
          <Form onSubmit={this.onSubmitIOT} >
          <Button secondary >see location</Button>
          </Form>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default RentShow;
