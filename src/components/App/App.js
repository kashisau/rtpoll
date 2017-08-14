import React, { Component } from 'react';
import './App.css';
import Gauge from '../Gauge/Gauge.js';
import VoteButtons from '../VoteButtons/VoteButtons.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gaugeValue: 0,
      votes: []
    };
    this.submitVote = this.submitVote.bind(this);
  }

  submitVote(voteEvent, voteCount) {
    voteEvent.preventDefault();
    voteCount = parseInt(voteCount) || 0;
    if (voteCount === 0) return;

    voteCount = Math.min(voteCount, 1);
    voteCount = Math.max(voteCount, -1);

    let votes = this.state.votes;
    votes.push(voteCount);
    
    let voteAverage = votes.reduce((sentiment, element) => sentiment + element) / votes.length;

    this.setState({
      votes: votes,
      gaugeValue: voteAverage
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Real-time poll</h1>
        </div>
        <Gauge gaugeValue={this.state.gaugeValue} />
        <VoteButtons submitVote={this.submitVote} />
      </div>
    );
  }
}

export default App;
