import React from 'react';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import BuildPlayers from '../BuildPlayers/BuildPlayers';
import NewPlayerForm from '../NewPlayerForm/NewPlayerForm';

class PlayerContainer extends React.Component {
  state = {
    players: [],
    formOpen: false,
    updatedPlayer: {},
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
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not add player', err));
  }

  updateAPlayer = (playerToUpdate) => {
    this.setState({ formOpen: true, updatedPlayer: playerToUpdate });
  }

  updatePlayer = (playerId, editedPlayer) => {
    playerData.updatePlayer(playerId, editedPlayer)
      .then(() => {
        this.getPLayers();
        this.setState({ formOpen: false, editedPlayer: {} });
      })
      .catch((err) => console.error("couldn't edit player", err));
  }

  render() {
    const { players, formOpen, updatedPlayer } = this.state;

    const playerCard = players.map((player) => <BuildPlayers key={player.id} player={player} cutPlayer={this.cutPlayer} updateAPlayer={this.updateAPlayer}/>);

    return (
      <div>
        <div className="mb-3">
          <button type="button" className="btn btn-info add-player" onClick={() => { this.setState({ formOpen: !formOpen }); }}>Sign Player</button>
          { formOpen ? <NewPlayerForm addNewPlayer={this.addNewPlayer} player={updatedPlayer} updatePlayer={this.updatePlayer}/> : '' }
        </div>
        <div className="card-columns">
          {playerCard}
        </div>
      </div>
    );
  }
}

export default PlayerContainer;
