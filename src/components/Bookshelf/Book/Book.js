import React from 'react'

import './Book.css'

const Book = (props) => {
    const { bookClassName, cover, backcover } = props
    return (
        <div className={`book ${bookClassName}}`}>
            <div className={`book__side book__side--front ${cover}`}></div>
            <div className={`book__side book__side--back ${backcover}`}>
                <h3>&#9733;&#9733;&#9733;&#9733;&#9733;</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure natus delectus accusamus soluta voluptatem nam, corrupti porro nostrum veniam odit sint nihil esse minima temporibus quis iste? Aliquid, dolor?"</p>
            </div>
        </div>
    )
}

export default Book