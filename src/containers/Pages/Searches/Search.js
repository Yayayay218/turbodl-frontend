import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../../actions/Creators'
import {SearchList} from './SearchList'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            match: true
        }
        this.doSearch = this.doSearch.bind(this)
        this.doLoadMore = this.doLoadMore.bind(this)
    }

    doSearch() {
        let data = {
            q: `q=${this.state.url}`,
            maxResults: `maxResults=10`,
            loadMore: false
        }
        this.props.dispatch(Actions.search(data))
    }

    doNoMatch = () => {
        this.setState({match: false})
    }

    doClearUrl = () => {
        this.setState({url: ''})
    }

    doLoadMore() {
        let data = {
            q: `q=${this.state.url}`,
            maxResults: `maxResults=10`,
            pageToken: `pageToken=${this.props.nextPage}`,
            loadMore: true
        }
        this.props.dispatch(Actions.search(data))
    }

    componentWillUpdate(newProps, newState) {
    }

    render() {
        const {searches} = this.props
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">
                        <div className="download-wrapper _1">
                            <div className="input-group">
                                {
                                    this.state.url !== '' &&
                                    <span className="close-icon"
                                          onClick={this.doClearUrl}
                                    ></span>

                                }
                                <input type="text" className="form-control"
                                       placeholder="Search for Youtube videos"
                                       value={this.state.url}
                                       onChange={(e) => this.setState({url: e.target.value})}
                                />
                                <span className="input-group-btn">
                            <button className="btn btn-search" type="button"
                                    onClick={this.doSearch}
                            >SEARCH</button>
                          </span>
                            </div>
                        </div>
                        <p style={{fontWeight: 'bold', marginTop: '10px'}}><i>For example: “Despacito”
                        </i></p>
                    </div>
                    <div className="col-md-8 col-12">
                        <SearchList
                            items={searches}
                        />
                    </div>
                    <div className="col-md-8 col-12" style={{textAlign: 'center'}}>
                        {
                            this.props.searches.length !== 0 &&
                            <button className="btn btn-primary"
                                    style={{marginTop: '20px', marginBottom: '50px'}}
                                    onClick={this.doLoadMore}
                            >
                                Load More
                            </button>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searches: state.searches.data,
        error: state.searches.errCode,
        fetched: state.searches.fetched,
        nextPage: state.searches.nextPage
    }
};

export default connect(mapStateToProps)(Search)