import React, { Component } from 'react';
import Gauge from '../Gauge/Gauge';
import openSocket from 'socket.io-client';
import './ClientGraph.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const VOTE_API_SERVER = "http://localhost:8000";


class ClientGraph extends Component {

  /**
   * Sets the initial state of the component.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      clientGraphData: [],
      disabled: true
    };

    this.clientData = this.clientData.bind(this);
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

    this.socket.on('clientList', (clients) => reactComponent.setState({clients: clients, clientGraphData: this.clientData(clients)}));
  }

  /**
   * Uses D3.js-native rendering to populate an SVG.
   * @return 
   */
  clientData(clientList) {
    const data = [];
    clientList.map(
      (client) => {
        data.push({
          name: client.id,
          average: client.average,
          totalAverage: client.totalAverage
        })
      }
    );
    return data;
  }

  render() {
    const server = <circle r="12px" cx="100px" cy="50px" />
    const nodes = this.props.clientList.map((clientId) => {
      
    });
    return <div className="ClientGraph">
        <BarChart width={800} height={400} data={this.state.clientGraphData} ref={this.chart}>
        <XAxis dataKey="name" />
        <YAxis domain={[-1, 1]} />
        <Bar type="monotone" dataKey="average" barSize={10} fill="#8884d8"/>
        <Bar type="monotone" dataKey="totalAverage" barSize={10} fill="#8884d8"/>
        </BarChart>
        {this.props.clientList.map((client, key) => <p key={key}>ClientID: {client.id}, votes: {client.votes} (-{client.negative} / +{client.positive}), average: {client.average}</p>)}
    </div>
  }
}

export default ClientGraph;