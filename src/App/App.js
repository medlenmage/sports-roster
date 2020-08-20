import React from 'react';
import './App.scss';
import Auth from '../components/Auth/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Atlanta Braves</h2>
        <Auth />
      </div>
    );
  }
}

export default App;
