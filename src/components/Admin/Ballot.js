import React, { Component } from 'react';
import Gauge from '../Gauge/Gauge';
import openSocket from 'socket.io-client';
import './Admin.css';
import ClientGraph from '../ClientGraph/ClientGraph';

const VOTE_API_SERVER = "https://voteapi.kashis.com.au";


class Ballot extends Component {

  /**
   * Sets the initial state of the component.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      gaugeValue: 0,
      disabled: true
    };
  }

  /**
   * Establish our socket connection, and update the state based on
   * server connectivity.
   */
  componentWillMount() {
    const reactComponent = this;
    this.socket = openSocket(`${VOTE_API_SERVER}/vote`);
    
    this.socket.on('connect', (voteServerSocket) => {
      reactComponent.setState({disabled: false});
    });
    this.socket.on('disconnect', (voteServerSocket) => {
      reactComponent.setState({disabled: true});
    });

    this.socket.on('voteAverage', (averageData) => reactComponent.setState({gaugeValue: averageData}));
  }

  render() {
    return <div className="App Admin">
    <div className="Header">
      <h1>Real-time poll administration</h1>
    </div>
    <Gauge gaugeValue={this.state.gaugeValue} disabled={this.state.disabled} />
    <ClientGraph />
    </div>
}
}

export default Ballot;