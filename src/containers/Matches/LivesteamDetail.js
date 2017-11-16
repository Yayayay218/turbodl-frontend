import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'

class LivestreamDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{minHeight: '100vh'}}>
                <div className="container" >
                    <div className="col-md-8">
                        <div className="match-detail">
                            <h3>{this.props.channel.title}</h3>
                            <iframe frameBorder="0" scrolling="no"
                                    allowFullScreen="true"
                                    webkitallowfullscreen="true" mozallowfullscreen="true"
                                    sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-presentation"
                                    src={this.props.channel.link}
                                    width="100%" height="433" className="margin-xs">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
        // {/*<iframe src={this.props.matches.url} sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-presentation" allowFullScreen></iframe>*/
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        livestreams: state.livestreams.data,
        channel: state.livestreams.currentChannel
    }
};

LivestreamDetail.propTypes = {
    livestreams: PropTypes.array
}

LivestreamDetail.defaultProps = {
    livestreams: []
}
export default connect(mapStateToProps)(LivestreamDetail)