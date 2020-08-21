import React from 'react';
// import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import BuildPlayers from '../BuildPlayers/BuildPlayers';

class PlayerContainer extends React.Component {
  // static propTypes = {

  // }

  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('The players are on strike!', err));
  }

  render() {
    const { players } = this.state;

    const playerCard = players.map((player) => <BuildPlayers key={player.id} player={player} />);

    return (
      <div className="card-columns">
        {playerCard}
      </div>
    );
  }
}

export default PlayerContainer;
