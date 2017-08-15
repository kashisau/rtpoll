import React, { Component } from 'react';
import classnames from 'classnames';
import './VoteButtons.css';

class VoteButtons extends Component {
    render() {
        return <div className="VoteButtons">
            <a onClick={(e) => this.props.submitVote(e, -1)} data-vote-value="-1" className={classnames("VoteButtons-button","negative", {"disabled": this.props.disabled})} href="javascript:void(0);" title="Vote negative">&minus;</a>
            <span className="VoteButtons-divider"></span>
            <a onClick={(e) => this.props.submitVote(e, 1)} data-vote-value="1" className={classnames("VoteButtons-button","positive", {"disabled": this.props.disabled})} href="javascript:void(0);" title="Vote positive">+</a>
        </div>
    }
}

export default VoteButtons;