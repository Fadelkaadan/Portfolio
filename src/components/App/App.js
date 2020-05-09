import React, { Component } from 'react'

import Main from '../Main'
import Spaceport from '../Spaceport'
import Map from '../Map'
import Bookshelf from '../Bookshelf'
import Footer from '../Footer'

import './style.css'

//test

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Main/>
                <Spaceport/>
                <Map/>
                <Bookshelf/>
                <Footer/>
            </div>
        )
    }
}