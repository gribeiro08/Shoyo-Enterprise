import './Content.css'
import React from 'react'
import {Routes, Route} from "react-router-dom"

import Home from '../../views/Home'
import Morador from '../../views/Morador'
import Visitante from '../../views/Visitante'

export default () => {
    return (
        <div className="Content">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/morador" element={<Morador />} />
                <Route path="/visitante" element={<Visitante />} />
            </Routes>
        </div>
    )
}