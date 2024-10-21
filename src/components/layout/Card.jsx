import React from 'react'
import './Card.css'

export default props => {
    return(
        <div className="Card">
            <h2 className="Title">{props.title}</h2>
            <div className="Content">
                <p> { props.content} </p>
                <p> { props.data} </p>
            </div>
        </div>
    )
}