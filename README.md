# Sports Roster

# Description

# This is a web app that takes in players from a team and prints them in a card form with picture, position played, and name. This app is a crud app which means it is designed to  display players from a given roster, add new players to roster, update the players(such as position or team), and lastly cut players from the roster.
---
### Features
* Will have a navbar at the top with a button to login or out
* Page has styling that make's for easy viewing
* Page requires sign-in/authentacation
* Can only view players on your team/profile
* Players printing to the page in columns that are sized acceptably for viewing
* Icon/button at the top that allows adding/creating a new player and adding them to the roster.
* Each player has two buttons one to cut the player the other to update it
* Clicking the cut button will delete player from app and database
* Clicking the update button should populate a form that allows you to update player name, image, and position.
* Clicking the add player button in the nav bar should populate a form that takes in a name, image url, and position.
* When submitting update or add form's the dom should refresh to show updated state of the players
---
### How to run
1. Here is the link to the delpoyed app https://sports-roster-1e9c9.web.app/
---
### Contributors
* [Joshua Medlen](https://github.com/medlenmage)
---
## Screenshot
![screenshot](/screenshots/roster.png)
---
## Code-Sample
```
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

```
