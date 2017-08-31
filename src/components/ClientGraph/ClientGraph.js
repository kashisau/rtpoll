import React, { Component } from 'react';
import Gauge from '../Gauge/Gauge';
import openSocket from 'socket.io-client';
import './ClientGraph.css';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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
      voteData: [],
      disabled: true
    };

    this.voteData = this.voteData.bind(this);
    this.colourBar = this.colourBar.bind(this);
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

    this.socket.on('clientList', (clients) => reactComponent.setState(
      {
        clients: clients,
        voteData: this.voteData(clients)
      })
    );
  }

  /**
   * Organises the vote data.
   * @return 
   */
  voteData(clientList) {
    const data = [];
    clientList.map(
      (client) => {
        data.push({
          name: client.id,
          average: client.average,
          totalAverage: client.totalAverage,
          color: client.colour
        })
      }
    );
    return data;
  }

  colourBar = (props) => {
    const { fill, x, y, width, height } = props;
    const color = props.payload.color;

    return <Rectangle x={x} y={y} width={width} height={height} fill={color} />
  };

  render() {
    return <div className="ClientGraph">
        <BarChart width={860} height={400} data={this.state.voteData}>
          <XAxis hide={true} />
          <YAxis hide={true} domain={[-1, 1]} />
          <Bar type="monotone" dataKey="average" barSize={20} shape={this.colourBar}/>
          <Bar type="monotone" dataKey="totalAverage" barSize={20} fill="#8884d8"/>
        </BarChart>
    </div>
  }
}

export default ClientGraph;