import React, { Component } from 'react'

import Book from './Book'

import './style/Bookshelf.css'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="heading">Book reviews</h2>
                <div className="books">
                    <Book bookClassName="book--1" cover="book__side--front-1" backcover="book__side--back-1"/>
                    <Book bookClassName="book--2" cover="book__side--front-2" backcover="book__side--back-2"/>
                    <Book bookClassName="book--3" cover="book__side--front-3" backcover="book__side--back-3"/>
                </div>
            </div>
        )
    }
}

export default Bookshelf