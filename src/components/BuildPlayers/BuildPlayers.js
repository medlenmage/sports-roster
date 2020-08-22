import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class BuildPlayer extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    cutPlayer: PropTypes.func.isRequired,
  }

  cutPlayerEvent = (e) => {
    e.preventDefault();
    const { player, cutPlayer } = this.props;
    cutPlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={player.imgUrl} alt={player.name}></img>
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.name} plays {player.position} for the Atlanta Braves</p>
        </div>
        <button className="btn btn-danger" onClick={this.cutPlayerEvent}>Cut Player</button>
      </div>
    );
  }
}

export default BuildPlayer;
