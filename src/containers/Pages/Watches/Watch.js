import React, {Component} from 'react'
import {connect} from 'react-redux';
import Actions from '../../../actions/Creators'
import {WatchLoading} from "./WatchLoading";

class Watch extends Component {
    constructor(props) {
        super(props)

        const {id} = props.match.params
        this.props.dispatch(Actions.postUrl({url: id}))
    }

    render() {
        const {livestreams, isPosting, isPosted} = this.props
        let tmp = livestreams.formats
        if (isPosting)
            return <div className="loading">Loading&#8230;</div>
        return (
            <div className="container">
                {
                    isPosted && <h1 style={{textAlign: 'center', marginTop: '15px'}}>{livestreams.fulltitle}</h1>
                }
                {
                    isPosted &&
                    <ul className="list-group">
                        {
                            livestreams.formats.map((item, key) => {
                                return (
                                    <li key={key} className="list-group-item">
                                        <a href={item.url}>
                                            {item.ext} | {item.format_note} {
                                            item.format_note === '1080p' && '(Muted)'
                                        }
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                <div className="col-12" style={{height: '50px'}}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        livestreams: state.livestreams.data,
        isPosted: state.livestreams.urlPosted,
        isPosting: state.livestreams.urlPosting,
        err: state.livestreams.err
    }
};

export default connect(mapStateToProps)(Watch)

