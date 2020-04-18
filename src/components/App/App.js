import React, { Component } from 'react'
import Main from '../Main'

import './style.css'
import Spaceport from '../Spaceport'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Main/>
                <Spaceport/>
            </div>
        )
    }
}