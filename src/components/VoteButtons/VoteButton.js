import React, { Component } from 'react';
import classnames from 'classnames';
import './VoteButtons.css';

class VoteButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnActive: false
        };
    }

    render() {
        return <a onClick={(e) => this.props.submitVote(e, this.props.polarity === 'negative'? -1 : 1)}
            className={
                classnames(
                    "VoteButtons-button",
                    this.props.polarity,
                    {"disabled": this.props.disabled},
                    { "active": this.state.btnActive }
                )}
                onTouchStart={ _ => this.setState({btnActive: true})}
                onTouchEnd={ _ => this.setState({btnActive: false})}
                onMouseDown={ _ => this.setState({btnActive: true})}
                onMouseUp={ _ => this.setState({btnActive: false})}
                onMouseLeave={ _ => this.setState({btnActive: false})}
                title={`Vote ${this.props.polarity}`}>{this.props.polarity === 'negative'? '−' : '+'}</a>
    }
}

export default VoteButton;