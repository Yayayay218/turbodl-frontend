import React, {Component} from 'react'
import Search from './Searches/Search'
import Url from './SaveFrom'
import Navigate from './Navigates/Navigate'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initStepIndex: 0,
        }
    }

    render() {
        const steps = [
            {
                render: () => (
                    <Search
                    />
                )
            },
            {
                render: () => (
                    <Url/>
                )
            }
        ]
        return (
            <Navigate
                steps={steps}
                initStepIndex={this.state.initStepIndex}
            />
        )
    }
}

export default Home