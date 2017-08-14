import React, { Component } from 'react';
import './VoteButtons.css';

class VoteButtons extends Component {
    render() {
        return <div className="VoteButtons">
            <a onClick={(e) => this.props.submitVote(e, -1)} data-vote-value="-1" className="VoteButtons-button negative" href="/vote/negative" title="Vote negative">&minus;</a>
            <span className="VoteButtons-divider"></span>
            <a onClick={(e) => this.props.submitVote(e, 1)} data-vote-value="1" className="VoteButtons-button positive" href="/vote/positive" title="Vote positive">+</a>
        </div>
    }
}

export default VoteButtons;