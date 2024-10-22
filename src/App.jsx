import React from 'react'
import Content from './components/layout/Content'
import AppTitle from './components/layout/AppTitle'
import SideMenu from './components/layout/SideMenu'
import Home from './views/Home'
import Morador from './views/Morador'
import Visitante from './views/Visitante'
import { BrowserRouter } from  'react-router-dom'
import "./App.css"

const App = props =>(
    <div className="App">
        <AppTitle />
        <section className='AppContent'>
        <SideMenu />
            <BrowserRouter>

                <Content />
            </BrowserRouter>
        </section>
        
    </div>
)

export default App;