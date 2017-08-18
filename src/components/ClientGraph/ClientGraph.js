import React, { Component } from 'react';
import Gauge from '../Gauge/Gauge';
import openSocket from 'socket.io-client';
import './ClientGraph.css';

const VOTE_API_SERVER = "https://voteapi.kashis.com.au";


class ClientGraph extends Component {

  /**
   * Sets the initial state of the component.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      disabled: true
    };
  }

  /**
   * Establish our socket connection, and update the state based on
   * server connectivity.
   */
  componentWillMount() {
    const reactComponent = this;
    this.socket = openSocket(`${VOTE_API_SERVER}/ballot`);
    
    this.socket.on('connect', (voteServerSocket) => {
      reactComponent.setState({disabled: false});
    });
    this.socket.on('disconnect', (voteServerSocket) => {
      reactComponent.setState({disabled: true});
    });

    this.socket.on('clientChange', (clients) => reactComponent.setState({clients: clients}));
  }

  render() {
    return <div className="ClientGraph">
        <svg width="200px" height="100px" ref={this.d3Canvas}></svg>
        <script src="https://d3js.org/d3.v4.min.js"></script>
    </div>
  }
}

export default ClientGraph;