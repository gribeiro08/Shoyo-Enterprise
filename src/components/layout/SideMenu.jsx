import React from 'react'
import './SideMenu.css'

export default () => {
    return(
        <div className="SideMenu">
            <nav>
                <ul>
                    <a href='home'>Home</a>
                </ul>
                <ul>
                    <a href='morador'>Morador</a>
                </ul>
                <ul>
                    <a href='visitante'>Visitante</a>
                </ul>
            </nav>
        </div>
    )
}