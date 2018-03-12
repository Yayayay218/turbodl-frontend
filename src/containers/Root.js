import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from '../store/Store';
import SaveFrom from '../containers/Pages/SaveFrom'
import {Free, Pro, OurApp} from "./Pages/Free";

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
                    <Switch>
                        <Route exact path="/" component={SaveFrom}/>
                        <Route path="/free" component={Free}/>
                        <Route path="/pro" component={Pro}/>
                        <Route path="/our-app" component={OurApp}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Root