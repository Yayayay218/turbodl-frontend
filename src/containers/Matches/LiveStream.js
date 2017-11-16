import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import LiveBox from '../../components/LiveBox'

class LiveStream extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(Actions.getLivestream({
            id: null,
        }))
    }

    render() {
        return (
            <div className="container no-padding " style={{minHeight: '100vh'}}>
                <h1 className="match-list-title">livestream</h1>
                <div className="match-list-line"></div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="live-stream-list">
                            {
                                this.props.livestreams.map((match, key) => {
                                    return (
                                        <div key={key} style={{cursor: 'pointer'}}>
                                            <LiveBox onClickChannel={(data) => {
                                                this.props.dispatch(Actions.setChannel(data));
                                                this.props.history.push('/live')
                                            }} {...match}/>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        livestreams: state.livestreams.data
    }
};

// Use connect to put them together
export default connect(mapStateToProps)(LiveStream);