import React, {Component} from 'react'
import Search from '../../containers/Pages/Searches/Search'
import Url from '../../containers/Pages/SaveFrom'
import HomeWizard from '../../components/Wizard/HomeWizard'
import qs from '../../utils/query-string/index'
import {connect} from 'react-redux'
import Actions from '../../actions/Creators'
import jwt from 'jsonwebtoken'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initStepIndex: 0,
        }
        this.onUnload = this.onUnload.bind(this)
        const parsed = qs.parse(props.location.search);
        if (parsed.token) {
            jwt.verify(parsed.token, '3340e18c-baba-4b7b-bb6c-d1f17dc7d8b8', function (err, decoded) {
                if (err) {
                }
                else
                    props.authenticate()
            });
        }

        if (parsed.tokens === 'e9adebad-a22b-4de8-b13b-d18ce2624e4d') {
            props.authenticate()
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.onUnload)
        this.props.history.push('/')
    }

    onUnload(event) { // the method that will be used for both add and remove event
        localStorage.removeItem("reduxPersist:authenticated")
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload)
    }

    render() {
        const steps = [
            {
                render: () => (
                    <Search
                        isAuthenticated={this.props.isAuthenticated}
                    />
                )
            },
            {
                render: () => (
                    <Url
                        isAuthenticated={this.props.isAuthenticated}

                    />
                )
            }
        ]
        return (
            <HomeWizard
                steps={steps}
                initStepIndex={this.state.initStepIndex}
                isAuthenticated={this.props.isAuthenticated}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authenticated.isAuthenticated,
        isFetched: state.authenticated.isFetched
    }
};

export default connect(mapStateToProps, {authenticate: Actions.authenticated})(Home)