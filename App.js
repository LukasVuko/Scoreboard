function Header(props) {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.playerCount}</span>
    </header>
  );
}

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
}
class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Lukas",
        id: 1
      },
      {
        name: "Julia",
        id: 2
      },
      {
        name: "Victoria",
        id: 3
      },
      {
        name: "Mackenzie",
        id: 4
      }
    ]
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header playerCount={this.state.players.length} />

        {this.state.players.map(player => (
          <Player
            name={player.name}
            key={player.id}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
