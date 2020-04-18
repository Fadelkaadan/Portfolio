import React, { Component } from 'react'

import Rocket from './Rocket'

import './style.css'

class Spaceport extends Component {
    render() {
        return (
            <section class="section-falcon" id="section-falcon">
                <div class="falcon--description">
                    <p class="falcon--description__text">This rocket has cutting-edge technologies. It can go to galaxies far far away and can even return back simply by clicking on its pad again.</p>
                </div>
                <Rocket/>
            </section>
        )
    }
}

export default Spaceport