import React from 'react'
import Content from './components/layout/Content'
import AppTitle from './components/layout/AppTitle'
import SideMenu from './components/layout/SideMenu'
import { BrowserRouter } from  'react-router-dom'
import "./App.css"

const App = props =>(
    <div className="App">
        <AppTitle />
        <section className='AppContent'>
            <BrowserRouter>
                <SideMenu />
                <Content />
            </BrowserRouter>
        </section>
        
    </div>
)

export default App;