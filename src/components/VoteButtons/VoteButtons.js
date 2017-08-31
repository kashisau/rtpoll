import React, { Component } from 'react';
import classnames from 'classnames';
import './VoteButtons.css';
import VoteButton from '../VoteButton/VoteButton';

class VoteButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="VoteButtons">
            <VoteButton submitVote={this.props.submitVote} polarity="negative" />
            <span className="VoteButtons-divider"></span>
            <VoteButton submitVote={this.props.submitVote} polarity="positive" />
        </div>
    }
}

export default VoteButtons;