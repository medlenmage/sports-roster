import React from 'react';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import BuildPlayers from '../BuildPlayers/BuildPlayers';
import NewPlayerForm from '../NewPlayerForm/NewPlayerForm';

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

  addNewPlayer = (newPlayer) => {
    playerData.addPlayer(newPlayer)
      .then(() => {
        this.getPLayers();
        // this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not add player', err));
  }

  render() {
    const { players } = this.state;
    // const { addNewPlayer } = this.props;

    const playerCard = players.map((player) => <BuildPlayers key={player.id} player={player} cutPlayer={this.cutPlayer} />);

    return (
      <div>
        <div className="mb-3">
          <NewPlayerForm addNewPlayer={this.addNewPlayer}/>
        </div>
        <div className="card-columns">
          {playerCard}
        </div>
      </div>
    );
  }
}

export default PlayerContainer;
