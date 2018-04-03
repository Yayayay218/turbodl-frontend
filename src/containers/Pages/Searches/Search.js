import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../../actions/Creators'
import {SearchList} from './SearchList'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
           url: ''
        }
        this.doSearch = this.doSearch.bind(this)
    }

    doSearch() {
        let data = {
            q: `q=${this.state.url}`,
            maxResults: `maxResults=10`
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
                        <div className="download-wrapper _1">
                            <div className="input-group">
                                {
                                    this.state.url !== '' &&
                                    <span className="close-icon"
                                          onClick={() => this.setState({url: ''})}
                                    ></span>

                                }
                                <input type="text" className="form-control" placeholder="Enter text to search video"
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
                    </div>
                    <div className="col-md-8 col-12">
                        <SearchList
                            items={searches}
                        />
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
        fetched: state.searches.fetched
    }
};

export default connect(mapStateToProps)(Search)