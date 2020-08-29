import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connections';
// import PropTypes from 'prop-types';
import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import PlayerContainer from '../components/PlayersContainer/PlayersContainer';

fbConnection();
// add newplayer form
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        return <PlayerContainer />;
      }
      return '';
    };

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <img src="https://i.imgur.com/330sNr5.jpg" alt="team-logo" className="roster-logo"></img>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
