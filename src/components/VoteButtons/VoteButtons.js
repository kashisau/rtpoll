import React, { Component } from 'react';
import classnames from 'classnames';
import './VoteButtons.css';

class VoteButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnActivePos: false,
            btnActiveNeg: false
        };
    }

    render() {
        return <div className="VoteButtons">
            <a onClick={(e) => this.props.submitVote(e, -1)}
                data-vote-value="-1"
                className={
                    classnames(
                        "VoteButtons-button",
                        "negative",
                        {"disabled": this.props.disabled},
                        { "active": this.state.btnActiveNeg }
                    )}
                    onTouchStart={ _ => this.setState({btnActiveNeg: true})}
                    onTouchEnd={ _ => this.setState({btnActiveNeg: false})}
                    title="Vote negative">&minus;</a>
            <span className="VoteButtons-divider"></span>
            <a onClick={(e) => this.props.submitVote(e, 1)}
                data-vote-value="1"
                className={
                    classnames(
                        "VoteButtons-button",
                        "positive",
                        {"disabled": this.props.disabled},
                        { "active": this.state.btnActivePos }
                    )}
                    onTouchStart={ _ => this.setState({btnActivePos: true})}
                    onTouchEnd={ _ => this.setState({btnActivePos: false})}
                    title="Vote positive">+</a>
        </div>
    }
}

export default VoteButtons;