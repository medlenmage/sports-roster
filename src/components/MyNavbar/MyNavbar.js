/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="team-logo" src="https://sportslogohistory.com/wp-content/uploads/2018/03/atlanta_braves_2018-pres.png" alt="braves-logo"></img>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {
                authed
                  ? <button className="nav-link btn btn-danger text-dark logout-button" onClick={this.logoutClickEvent}><i className="fas fa-baseball-ball">3rd Strike!!!</i></button>
                  : <Auth />
              }
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
