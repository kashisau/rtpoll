import React, { Component } from 'react';
import './Gauge.css';

class Gauge extends Component {
    render() {
        return <div className="Gauge">
            <div className="Gauge-outline">
                <div className="Gauge-needle"></div>
            </div>
        </div>
    }
}

export default Gauge;