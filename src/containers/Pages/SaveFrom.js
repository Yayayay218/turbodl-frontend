import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Spinner from 'react-spinkit'

class SaveFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
        this.doPost = this.doPost.bind(this)
        this.onUnload = this.onUnload.bind(this)
    }

    onUnload(event) { // the method that will be used for both add and remove event
        localStorage.removeItem("reduxPersist:livestreams")
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.onUnload)
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload)
    }


    doPost() {
        //
        this.props.dispatch(Actions.postUrl(this.state))
    }

    componentWillUpdate(newProps, newState) {
        // if (this.state.url !== newState.url && newState.url !== '') {
        //     this.props.dispatch(Actions.postUrl(newState))
        // }
    }

    render() {
        const {isPosted, livestreams, isPosting, err} = this.props
        return (
            <div className="container">
                <h3>turbodl.net</h3>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">
                        <div className="input-group">
                            {
                                this.state.url !== '' &&
                                <span className="close-icon"
                                    onClick={() => this.setState({url: ''})}
                                ></span>

                            }
                            <input type="text" className="form-control" placeholder="Insert A Link..."
                                   value={this.state.url}
                                   onChange={(e) => this.setState({url: e.target.value})}
                            />
                            <span className="input-group-btn">
                            <button className="btn btn-search" type="button"
                                    onClick={this.doPost}
                            ></button>
                          </span>
                        </div>
                    </div>
                </div>
                {
                    isPosting && <div className="d-flex justify-content-center" style={{marginTop: '25px'}}><Spinner
                        name="three-bounce"/></div>
                }
                {
                    err && <p style={{textAlign: 'center', marginTop: '15px', color: 'red', fontSize: '14px'}}>Invalid URL</p>
                }
                {
                    isPosted &&
                    <div className="row justify-content-center" style={{marginTop: '25px', marginBottom: '10px'}}>
                        <div className="col-md-4 col-6">
                            <div className="thumb-box">
                                <img src={livestreams.thumbnail} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4 col-6 no-padding-left">
                            <p className="title">{livestreams.fulltitle}</p>
                            <p className="duration">{livestreams.duration}</p>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="dropdown">
                                <button type="button" className="btn btn-dropdown dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false"
                                >
                                    Select video quality to download
                                </button>
                                <div className="dropdown-menu">
                                    {
                                        livestreams.formats.map((item, key) => (
                                            <a className="dropdown-item" href={item.url} download
                                               key={key}>{item.container} {item.resolution} {
                                                   item.resolution === '1080p' && '(Muted)'
                                            }</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="row justify-content-center">
                    <div className="col-12">
                        <p className="txt-intro">1. Copy your video URL and paste it to the input field above. Then click arrow icon (->)</p>

                        <p className="txt-intro">2. Select video quality, and wait until the video is played </p>

                        <p className="txt-intro">3. ‘Download’ button will show up, then just tap that button to start downloading</p>

                        <p className="txt-intro" style={{fontWeight: 'bold'}}>* This website is not related to the app
                            <br/>
                            Turbodl Vidmate Tubemate Pro
                            <br/>
                            on Appstore</p>
                    </div>
                </div>

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

export default connect(mapStateToProps)(SaveFrom)