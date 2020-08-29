import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class NewPlayerForm extends React.Component {
  static propTypes = {
    addNewPlayer: PropTypes.func.isRequired,
    // updatePlayer: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    imgUrl: '',
    position: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changePictureEvent = (e) => {
    e.preventDefault();
    this.setState({ imgUrl: e.target.value });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  signPlayerEvent = (e) => {
    e.preventDefault();
    const { name, imgUrl, position } = this.state;
    const { addNewPlayer } = this.props;

    const newPlayer = {
      name,
      imgUrl,
      position,
      uid: authData.getUid(),
    };
    addNewPlayer(newPlayer);
  }

  render() {
    const {
      name,
      imgUrl,
      position,
    } = this.state;

    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="playerName">Player Name</label>
          <input type="text" className="form-control" id="playerName" placeholder="Enter Player" value={name} onChange={this.changeNameEvent} />
        </div>
        <div className="form-group">
          <label htmlFor="player-imgUrl">Player Picture</label>
          <input type="text" className="form-control" id="player-imgUrl" placeholder="Player Picture" value={imgUrl} onChange={this.changePictureEvent} />
        </div>
        <div className="form-group">
          <label htmlFor="player-position">Player Position</label>
          <input type="text" className="form-control" id="player-position" placeholder="Player Position"value={position} onChange={this.changePositionEvent} />
        </div>
      <button className="btn btn-primary" onClick={this.signPlayerEvent}>Submit</button>
    </form>
    );
  }
}

export default NewPlayerForm;
