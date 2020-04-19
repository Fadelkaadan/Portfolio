import React, { Component } from 'react'

import Main from '../Main'
import Spaceport from '../Spaceport'
// import Bookshelf from '../Bookshelf'
import Footer from '../Footer'

import './style.css'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Main/>
                <Spaceport/>
                {/* <Bookshelf/> */}
                <Footer/>
            </div>
        )
    }
}