import React, { Component } from 'react';
import Gauge from '../Gauge/Gauge';
import openSocket from 'socket.io-client';
import './Admin.css';
import ClientGraph from '../ClientGraph/ClientGraph';

const VOTE_API_SERVER = "http://localhost:8000";


class Ballot extends Component {

  /**
   * Sets the initial state of the component.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      gaugeValue: 0,
      voteDisabled: true,
      graphDisabled: true,
      needleColor: "#BD4932",
      clientList: []
    };
  }

  /**
   * Establish our socket connection, and update the state based on
   * server connectivity.
   */
  componentWillMount() {
    const reactComponent = this;
    const voteSocket = openSocket(`${VOTE_API_SERVER}/vote`);
    
    voteSocket.on('connect', (voteServerSocket) => {
      reactComponent.setState({voteDisabled: false});
    });
    voteSocket.on('disconnect', (voteServerSocket) => {
      reactComponent.setState({voteDisabled: true});
    });
    voteSocket.on('voteAverage', (averageData) => reactComponent.setState({gaugeValue: averageData}));

    this.voteSocket = voteSocket;

    const ballotSocket = openSocket(`${VOTE_API_SERVER}/ballot`);

    ballotSocket.on('connect', (ballotServerSocket) => {
      reactComponent.setState({graphDisabled: false});
    });
    ballotSocket.on('disconnect', (ballotServerSocket) => {
      reactComponent.setState({graphDisabled: true});
    });
    ballotSocket.on('clientList', (clientList) => reactComponent.setState({clientList: clientList}));

    this.ballotSocket = ballotSocket;
  }

  render() {
    return <div className="App Admin">
    <div className="Header">
      <h1>Real-time poll administration</h1>
    </div>
    <Gauge needleColor={this.state.needleColor} gaugeValue={this.state.gaugeValue} disabled={this.state.voteDisabled} />
    <ClientGraph clientList={this.state.clientList} disabled={this.state.graphDisabled} />
    </div>
}
}

export default Ballot;