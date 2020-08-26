import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class NewPlayerForm extends React.Component {
  static propTypes = {
    addNewPLayer: PropTypes.func.isRequired,
    // updatePlayer: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    imgUrl: '',
    position: '',
  }

  signPlayerEvent = (e) => {
    e.preventDefault();
    const { name, imgUrl, position } = this.state;
    const { addNewPLayer } = this.props;

    const newPlayer = {
      name,
      imgUrl,
      position,
      uid: authData.getUid(),
    };
    addNewPLayer(newPlayer);
  }

  render() {
    const {
      position,
      imgUrl,
      name,
    } = this.state;

    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label for="playerName">Player Name</label>
          <input type="text" className="form-control" id="playerName" placeholder="Enter Player" value={name}></input>
        </div>
        <div class="form-group">
          <label for="player-imgUrl">Player Picture</label>
          <input type="text" class="form-control" id="player-imgUrl" placeholder="Player Picture" value={imgUrl}></input>
        </div>
        <div class="form-group">
          <label for="player-position">Player Position</label>
          <input type="text" class="form-control" id="player-position" placeholder="Player Position"value={position}></input>
        </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default NewPlayerForm;
