import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import VotingApp from '../VotingApp/VotingApp';
import Ballot from '../Admin/Ballot';

const VoteDisplay = () => <VotingApp />;

const Routing = () => (
    <Router>
        <switch>
            <Route exact path="/" component={VotingApp}/>
            <Route exact path="/ballot" component={Ballot}/>
        </switch>
    </Router>
);

export default Routing;