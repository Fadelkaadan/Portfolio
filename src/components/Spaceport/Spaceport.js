import React, { Component } from 'react'

import Rocket from './Rocket'

import './Spaceport.css'

class Spaceport extends Component {
    render() {
        return (
            <section className="section-falcon" id="section-falcon">
                <div className="falcon--description">
                    <p>This rocket has cutting-edge technologies. It can go to galaxies far far away and can even return back simply by clicking on its pad again.</p>
                </div>
                <Rocket/>
            </section>
        )
    }
}

export default Spaceport