import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametros'
import Aleatorio from './components/basicos/Aleatorio'

export default () =>{
    return (
    <>
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro titulo ="Notas" aluno="Leonardo" nota={9.8}></ComParametro>
    </div>
    <div class = "tentativa1">
        <Primeiro></Primeiro>
    </div>
    <div>
        <Aleatorio minimo={1} maximo={100}></Aleatorio>
    </div>
    <Card titulo="Teste"></Card>
    </>
    )
}