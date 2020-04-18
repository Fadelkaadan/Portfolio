import React, { Component } from 'react'

import './style.css'

class Rocket extends Component {
    render() {
        return (
            <div class="falcon--control-panel">
                <button class="falcon--btn">
                    <svg class="falcon--icon">
                        <use xlinkHref="assets/images/rocket.svg#icon-rocket"></use>
                    </svg>
                </button>
            </div>
        )
    }
}

export default Rocket