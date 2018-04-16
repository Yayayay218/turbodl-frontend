import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import configureStore from '../store/Store';
import Watch from './Pages/Watches/Watch'
import Home from '../views/Home/Home'
import FreePage from '../views/Pages/FreePage'
import ProPage from '../views/Pages/ProPage'
import OurAppPage from '../views/Pages/OurAppPage'

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
                        <Route exact path="/" component={Home}/>
                        <Route path="/free" component={FreePage}/>
                        <Route path="/pro" component={ProPage}/>
                        <Route path="/our-app" component={OurAppPage}/>
                        <Route path="/watch/:id" component={Watch}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Root