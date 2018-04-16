import React, {Component} from 'react'
import Logo from '../../assets/images/turbodl-new.svg'
import Turbodl from '../../assets/images/turbodl-net.svg'

class HomeWizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStepIndex: props.initStepIndex || 0
        }
    }

    render() {
        const {steps, isAuthenticated} = this.props;
        const {currentStepIndex} = this.state;
        let currentStep = steps[currentStepIndex];

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-12 turbo-logo">
                        <div style={{textAlign: 'center'}}>
                            <img src={Logo} className="logo"/>
                            <img src={Turbodl} className="txt-turbo"/>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="row">
                            <div
                                className={this.state.currentStepIndex === 0 ? "col-6 search-step search-active" : "col-6 search-step"}
                                onClick={() => this.setState({currentStepIndex: 0})}
                            >
                                SEARCH
                            </div>
                            <div
                                className={this.state.currentStepIndex === 1 ? "col-6 search-step search-active" : "col-6 search-step"}
                                onClick={() => this.setState({currentStepIndex: 1})}
                            >
                                URL
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-wrapper">
                    {currentStep.render()}
                </div>
            </div>
        )
    }
}

export default HomeWizard