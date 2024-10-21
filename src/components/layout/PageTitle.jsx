import React from 'react'
import './PageTitle.css'

export default (props) =>{
    return (
    <header className="PageTittle">
        <div ClassName="AppTitle">
            <h1> {props.title} </h1>
        </div>

    </header>
    )
}