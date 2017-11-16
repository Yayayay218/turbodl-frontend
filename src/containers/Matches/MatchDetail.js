import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import { withRouter } from 'react-router'
class MatchDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(Actions.getMatches({
            id: this.props.match.params._id,
        }))
    }

    render() {
        return (
            <div style={{minHeight: '100vh'}}>
                {this.props.matches.map((match, key) => {
                    return (
                        <div className="container" key={key}>
                            <div className="col-md-8">
                                <div className="match-detail">
                                    <p>{match.description}</p>
                                    <h3>{match.title}</h3>
                                    <iframe frameBorder="0" scrolling="no"
                                            allowFullScreen="true"
                                            webkitallowfullscreen="true" mozallowfullscreen="true"
                                            sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-presentation"
                                            src={match.url}
                                            width="100%" height="433" className="margin-xs">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
        // {/*<iframe src={this.props.matches.url} sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-presentation" allowFullScreen></iframe>*/
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches.data,
    }
};

MatchDetail.propTypes = {
    matches: PropTypes.array
}

MatchDetail.defaultProps = {
    matches: []
}
export default withRouter(connect(mapStateToProps)(MatchDetail))