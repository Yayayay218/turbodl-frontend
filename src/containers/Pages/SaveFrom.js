import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Spinner from 'react-spinkit'
import {Link} from 'react-router-dom'
import Api from '../../services/dataService'
import VideoUrlCard from '../../components/Card/VideoUrlCard'

class SaveFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            match: true,
            isLoading: false,
            video: null,
            isIFrameOpen: false,
            link: ''
        }
        this.doSearchAnother = this.doSearchAnother.bind(this)
        this.doSearch = this.doSearch.bind(this)
    }

    isYoutubeUrl(url) {
        let isYouTubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//;
        return isYouTubeRegex.test(url)
    }

    doSearchAnother() {
        // console.log(this.isYoutubeUrl(this.state.url))
        console.log('a')
        this.setState({isLoading: true})
        const ParseApi = new Api(null);
        ParseApi.searchAnother(this.state)
            .then(res => {
                this.setState({
                    isLoading: false,
                    video: res.data
                })
            })
            .catch(err => console.log(err))
    }

    doSearch() {
        this.setState({video: null})
        let data = {
            q: `q=${this.state.url}`,
            maxResults: `maxResults=10`
        }
        this.props.dispatch(Actions.search(data))
    }

    doNoMatch = () => {
        this.setState({match: false})
    }

    handleIFrameOpen = (url) => () => {
        this.setState({isIFrameOpen: true, link: url})
    }

    componentWillUpdate(newProps, newState) {
        // if (this.state.url !== newState.url && newState.url !== '') {
        //     this.props.dispatch(Actions.postUrl(newState))
        // }
    }

    render() {
        const {err, fetched, searches} = this.props
        const {video, isIFrameOpen, link} = this.state

        if (isIFrameOpen)
            return <div className="container">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={link}
                            allowFullScreen></iframe>
                </div>
            </div>

        return (
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-8 col-12">
                        <div className="download-wrapper _2">
                            <div className="input-group">
                                {
                                    this.state.url !== '' &&
                                    <span className="close-icon"
                                          onClick={() => this.setState({url: ''})}
                                    ></span>

                                }
                                <input type="text" className="form-control" placeholder="Paste URL of video page"
                                       value={this.state.url}
                                       onChange={(e) => this.setState({url: e.target.value})}
                                />
                                <span className="input-group-btn">
                            <button className="btn btn-search" type="button"
                                    onClick={this.props.isAuthenticated ? this.isYoutubeUrl(this.state.url) ? this.doSearch : this.doSearchAnother : this.doNoMatch}
                            >DOWNLOAD</button>
                          </span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.isLoading &&
                    <div className="d-flex justify-content-center" style={{marginTop: '25px'}}><Spinner
                        name="three-bounce"/></div>
                }
                {
                    err &&
                    <p style={{textAlign: 'center', marginTop: '15px', color: 'red', fontSize: '14px'}}>Invalid URL</p>
                }
                {
                    (fetched && !video) &&
                    <VideoUrlCard
                        videoId={searches[0].id.videoId}
                        title={searches[0].snippet.title}
                        thumbnail={searches[0].snippet.thumbnails.high.url}
                        clickAble={true}
                    />

                }
                {
                    video &&
                    <div>
                        <VideoUrlCard
                            title={video.fulltitle}
                            thumbnail={video.thumbnail}
                            clickAble={false}
                        />
                        <ul className="list-group">
                            {
                                video.formats.map((item, key) => {
                                    return (
                                        <li key={key} className="list-group-item"
                                            style={{cursor: 'pointer'}}
                                            onClick={this.handleIFrameOpen(item.url)}
                                        >
                                            {item.format} | {item.ext}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="col-12" style={{height: '50px'}}></div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searches: state.searches.data,
        fetched: state.searches.fetched
    }
};

export default connect(mapStateToProps)(SaveFrom)