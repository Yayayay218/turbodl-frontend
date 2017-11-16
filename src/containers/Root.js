import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import ListMatches from '../containers/Matches/ListMatches'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import LiveStream from '../containers/Matches/LiveStream'
import MatchDetail from '../containers/Matches/MatchDetail'
import LivestreamDetail from '../containers/Matches/LivesteamDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from '../containers/Pages/About'
import DMCA from '../containers/Pages/DMCA'
import Privacy from '../containers/Pages/Privacy'
import configureStore from '../store/Store';

// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import App from './App'

class Root extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            active: false,
            store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render() {
        if (this.state.isLoading) return <div>Loading...</div>;
        return (
            <Provider store={this.state.store}>
                <Router>
                    <div className="">
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={LiveStream}/>
                            <Route exact path="/livestream" component={LiveStream}/>
                            <Route path="/high-light" render={props => (
                                <ListMatches {...props} matchType="1"/>
                            )}/>
                            <Route path="/full-match" render={props => (
                                <ListMatches {...props} matchType="0"/>
                            )}/>
                            <Route path="/about" component={About}/>
                            <Route path="/dmca" component={DMCA}/>
                            <Route path="/privacy-policy" component={Privacy}/>

                            <Route path="/watch/:_id" component={MatchDetail}/>
                            <Route path="/live" component={LivestreamDetail}/>

                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

Root.propTypes = {}

export default Root