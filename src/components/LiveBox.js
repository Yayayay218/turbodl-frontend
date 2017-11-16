import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class LiveBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '#' + props._id,
            expand: false
        }
        this.onExpand = this.onExpand.bind(this)
    }

    componentDidMount() {
    }

    onExpand() {
        this.setState({
            expand: !this.state.expand
        })

    }

    render() {
        return (
            <div>
                <div className="live-box" data-toggle="collapse" data-target={this.state.id}
                     onClick={this.onExpand}
                >
                    <div style={{display: 'flex'}}>
                        <div style={{position: 'absolute', top: '27px', left: '19px'}}><img
                            src="../assets/images/icons/live.svg" alt=""/></div>
                        <div className="live-box-content">
                            <p>{this.props.description}</p>
                            <h3>{this.props.title}</h3>
                        </div>
                        {!this.state.expand ? <div style={{position: 'absolute', top: '25px', right: '20px'}}>
                            <img
                                src="../assets/images/icons/arrow.svg" alt=""/>
                        </div> : <div style={{position: 'absolute', top: '25px', right: '20px'}}>
                            <img
                                src="../assets/images/icons/arrow-down.svg" alt=""/>
                        </div>}
                    </div>
                    {!this.state.expand ? <div className="live-box-line"></div> : <div></div>}

                </div>
                <div className="live-box-channel collapse" id={this.props._id}>
                    {
                        this.props.channels.map((channel, key) => {
                            return (
                                <div onClick={() => {this.props.onClickChannel(channel)}} key={key} className="channel-title">
                                    <div className="channel-content" style={{display: 'flex'}}>
                                        <div className="">
                                            <p>{channel.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

LiveBox.propTypes = {
    // id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

LiveBox.defaultProps = {
    // id: '',
    title: ''
};

export default LiveBox