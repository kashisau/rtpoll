import React, { Component } from 'react';
import './Gauge.css';

class Gauge extends Component {
    render() {
        return <div className="Gauge">
            <svg className="Gauge-image" viewBox="0 0 260 140" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dial" transform="translate(-10.000000, -10.000000)">
                    <path d="M10,140 C10,68.2029825 68.2029825,10 140,10 C211.797017,10 270,68.2029825 270,140 L10,140 Z M10,140 L270,140 L270,149 L10,149 L10,140 Z" id="Dial-Background" fill="#FFFAD5"></path>
                    <path d="M138,140 C136.68171,138.207869 137.348377,101.541203 140,30 C142.666667,101.554614 143.333333,138.22128 142,140 C140,142.668079 139.977435,142.688196 138,140 Z" id="Needle" fill="#BD4932"></path>
                    <circle id="Dial-Axle-Cover" fill="#D8D8D8" cx="140" cy="140" r="10"></circle>
                    <path d="M260,140 L270,140 C270,68.2029825 211.797017,10 140,10 C68.2029825,10 10,68.2029825 10,140 L20,140 C20,73.72583 73.72583,20 140,20 C206.27417,20 260,73.72583 260,140 Z M10,140 L270,140 L270,150 L10,150 L10,140 Z" id="Dial-Outline" fill="#FFD34E"></path>
                    </g>
                </g>
            </svg>
            <div className="VoteButtons">
                <a className="VoteButtons-button negative" href="/vote/negative" title="Vote negative">&minus;</a>
                <span className="VoteButtons-divider"></span>
                <a className="VoteButtons-button positive" href="/vote/positive" title="Vote positive">+</a>
            </div>
        </div>
    }
}

export default Gauge;