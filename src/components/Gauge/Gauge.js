import React, { Component } from 'react';
import './Gauge.css';

class Gauge extends Component {
    render() {
        return <div className="Gauge">
            <div className="Circle-outer"></div>
            <div className="Circle-inner"></div>
            <div className="Gauge-needle"></div>
        </div>
    }
}

export default Gauge;