import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import fbConnection from '../helpers/data/connections';
import './App.scss';
import Auth from '../components/Auth/Auth';

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
    // const { authed } = this.state;
    return (
      <div className="App">
        <h2>Atlanta Braves</h2>
        <Auth />
      </div>
    );
  }
}

export default App;
