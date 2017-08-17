import React, { Component } from 'react';
import './VotingApp.css';
import Gauge from '../Gauge/Gauge.js';
import VoteButtons from '../VoteButtons/VoteButtons.js';
import openSocket from 'socket.io-client';

const VOTE_API_SERVER = "https://voteapi.kashis.com.au";

class VotingApp extends Component {

  /**
   * Sets the initial state of the component.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      gaugeValue: 0,
      votes: [],
      disabled: true
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }

  /**
   * Establish our socket connection, and update the state based on
   * server connectivity.
   */
  componentWillMount() {
    const reactComponent = this;
    this.socket = openSocket(`${VOTE_API_SERVER}/vote`);
    this.submitVote = this.submitVote.bind(this);
    this.socket.on('connect', (voteServerSocket) => {
      reactComponent.setState({disabled: false});
    });
    this.socket.on('disconnect', (voteServerSocket) => {
      reactComponent.setState({disabled: true});
    });

    this.socket.on('voteAverage', (averageData) => reactComponent.setState({gaugeValue: averageData}));
  }

  /**
   * Establishes and limits the vote magnitude to ±1, then submits it to the
   * vote server for cummulation.
   * @param {ReactSyntheticEvent} voteEvent The event that wraps the voter's
   *                                        selection.
   * @param {Number} voteCount  The value of the vote [-1, 1].
   */
  submitVote(voteEvent, voteCount) {
    voteEvent.preventDefault();

    // Short-circuit if disabled.
    if (this.state.disabled) return false;

    voteCount = parseInt(voteCount, 10) || 0;

    // Short-circuit if NaN or otherwise undefined.
    if (voteCount === 0) return;

    // Limit the vote magnitude.
    voteCount = Math.min(voteCount, 1);
    voteCount = Math.max(voteCount, -1);

    this.socket.emit('castVote', voteCount);
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Real-time poll</h1>
        </div>
        <Gauge gaugeValue={this.state.gaugeValue} disabled={this.state.disabled} />
        <VoteButtons submitVote={this.submitVote} disabled={this.state.disabled} />
      </div>
    );
  }
}

export default VotingApp;
