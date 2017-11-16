import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Match from '../../components/Match'
import { withRouter } from 'react-router-dom'
class ListMatches extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(Actions.getMatches({
            id: null,
            type: this.props.matchType
        }))
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.matchType !== nextProps.matchType)
            this.props.dispatch(Actions.getMatches({
                id: null,
                type: nextProps.matchType
            }))
    }

    render() {
        return (
            <div className="container no-padding" style={{minHeight: '100vh'}}>
                <h1 className="match-list-title">{this.props.matchType == 0 ? 'Latest Full Matches' : 'Latest Highlights'}</h1>
                <div className="match-list-line"></div>
                <div className="album text-muted">
                    <div className="row">
                        {
                            this.props.matches.map((match, key) => {
                                return (
                                    <div className="col-md-3" key={key}>
                                        <Match {...match}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

ListMatches.propTypes = {
    matches: PropTypes.array,
    matchType: PropTypes.string
};

ListMatches.defaultProps = {
    matches: [],
    matchType: '0'
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches.data
    }
};

// Use connect to put them together
export default  withRouter(connect(mapStateToProps)(ListMatches));