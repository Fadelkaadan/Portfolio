import React, { Component } from 'react'

import { ReactComponent as RocketIcon } from './images/rocket.svg';

import './Rocket.css'

class Rocket extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rocketClassName: ''
        }

        this.handleRocket = this.handleRocket.bind(this)
    }
    
    handleRocket() {
        switch (this.state.rocketClassName) {
            case '':
            case 'land':
                this.setState({ rocketClassName: 'launch' })
                break;
            case 'launch':
                this.setState({ rocketClassName: 'land' })
                break
            default:
                this.setState({ rocketClassName: '' })
        }
    }

    render() {
        return (
            <div className="falcon--control-panel">
                <button onClick={this.handleRocket} className="falcon--btn">
                    <RocketIcon className={`falcon--icon ${this.state.rocketClassName}`}/>
                </button>
            </div>
        )
    }
}

export default Rocket