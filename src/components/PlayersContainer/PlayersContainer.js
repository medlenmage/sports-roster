import React from 'react';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import BuildPlayers from '../BuildPlayers/BuildPlayers';

class PlayerContainer extends React.Component {
  state = {
    players: [],
  }

  getPLayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('The players are on strike!', err));
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('The players are on strike!', err));
  }

  cutPlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPLayers();
      })
      .catch((err) => console.error('could not delete pin', err));
  }

  render() {
    const { players } = this.state;

    const playerCard = players.map((player) => <BuildPlayers key={player.id} player={player} cutPlayer={this.cutPlayer} />);

    return (
      <div className="card-columns">
        {playerCard}
      </div>
    );
  }
}

export default PlayerContainer;
