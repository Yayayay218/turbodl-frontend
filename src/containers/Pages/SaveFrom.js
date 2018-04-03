import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Spinner from 'react-spinkit'
import {Link} from 'react-router-dom'


class SaveFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            demoUrl: 'https://www.youtube.com/watch?v=HCjNJDNzw8Y',
            count: 1,
            tmpUrl: [
                'https://www.youtube.com/watch?v=HCjNJDNzw8Y',
                'https://www.youtube.com/watch?v=IEkyWhvS1mA',
                'https://www.youtube.com/watch?v=LLoyNxjhTzc',
                'https://www.youtube.com/watch?v=ZbZSe6N_BXs'
            ]
        }
        this.doPost = this.doPost.bind(this)
        this.doSearch = this.doSearch.bind(this)
        // this.onUnload = this.onUnload.bind(this)
    }

    doPost() {
        //
        this.props.dispatch(Actions.postUrl(this.state))
    }

    doSearch() {
        let data = {
            q: `q=${this.state.url}`,
            maxResults: `maxResults=10`
        }
        this.props.dispatch(Actions.search(data))
    }

    componentWillUpdate(newProps, newState) {
        // if (this.state.url !== newState.url && newState.url !== '') {
        //     this.props.dispatch(Actions.postUrl(newState))
        // }
    }

    render() {
        // console.log(this.state.count)
        const {isPosted, livestreams, isPosting, err, fetched, searches} = this.props
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {/*<div className="col-md-8 col-12 turbo-logo">*/}
                        {/*<div style={{textAlign: 'center'}}>*/}
                            {/*<img src={Logo} className="logo"/>*/}
                            {/*<img src={Turbodl} className="txt-turbo"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className="col-md-8 col-12">
                        {/*<p className="download-intro">Enter URL of video page here and*/}
                            {/*<br/>*/}
                            {/*press “Download”</p>*/}
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
                                    onClick={this.doSearch}
                            >DOWNLOAD</button>
                          </span>
                            </div>
                            {/*<p className="example-link">*/}
                            {/*Example:&nbsp;*/}
                            {/*<ReactCSSTransitionGroup*/}
                            {/*transitionName="example"*/}
                            {/*transitionEnterTimeout={500}*/}
                            {/*transitionLeaveTimeout={300}*/}
                            {/*>*/}
                            {/*<a*/}
                            {/*key={this.state.count}*/}
                            {/*onClick={(e) => this.setState({url: this.state.demoUrl})}*/}
                            {/*>*/}
                            {/*{this.state.demoUrl}</a>*/}
                            {/*</ReactCSSTransitionGroup>*/}

                            {/*</p>*/}
                        </div>
                    </div>
                </div>
                {
                    isPosting && <div className="d-flex justify-content-center" style={{marginTop: '25px'}}><Spinner
                        name="three-bounce"/></div>
                }
                {
                    err &&
                    <p style={{textAlign: 'center', marginTop: '15px', color: 'red', fontSize: '14px'}}>Invalid URL</p>
                }
                {
                    fetched &&
                    <div className="row justify-content-center" style={{marginTop: '25px', marginBottom: '10px'}}>
                        <div className="col-md-4 col-6">
                            <div className="thumb-box">
                                <img src={searches[0].snippet.thumbnails.high.url} alt=""/>
                            </div>
                        </div>
                        <Link to={{pathname: `/watch/${searches[0].id.videoId}`}} className="col-md-4 col-6 no-padding-left">
                            <p className="title">{searches[0].snippet.title}</p>
                            {/*<p className="duration">{livestreams.duration}</p>*/}
                        </Link>
                        {/*<div className="col-md-8 col-12">*/}
                            {/*<div className="dropdown">*/}
                                {/*<button type="button" className="btn btn-dropdown dropdown-toggle"*/}
                                        {/*data-toggle="dropdown"*/}
                                        {/*aria-haspopup="true" aria-expanded="false"*/}
                                {/*>*/}
                                    {/*Select video quality to download*/}
                                {/*</button>*/}
                                {/*<div className="dropdown-menu">*/}
                                    {/*{*/}
                                        {/*livestreams.formats.map((item, key) => (*/}
                                            {/*<a className="dropdown-item" href={item.url} download*/}
                                               {/*key={key}>{item.ext} {item.format_note} {*/}
                                                {/*item.format_note === '1080p' && '(Muted)'*/}
                                            {/*}</a>*/}
                                        {/*))*/}
                                    {/*}*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="col-12" style={{height: '50px'}}></div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        livestreams: state.livestreams.data,
        isPosted: state.livestreams.urlPosted,
        isPosting: state.livestreams.urlPosting,
        searches: state.searches.data,
        error: state.searches.errCode,
        fetched: state.searches.fetched
    }
};

export default connect(mapStateToProps)(SaveFrom)