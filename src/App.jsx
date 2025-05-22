import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Bienvenida from './components/Bienvenida'

const App = () => {
  const numeros = [2, 5, 8, 20]
  const dobles = numeros.map(num => <li>{num * 2}</li>)
  return (
    <>
      <Header></Header>
      <h2>CIU</h2>
      <ul>
        {dobles}
      </ul>
      <Bienvenida nombre="juan" apellido="Rodriguez" edad={27}></Bienvenida>
    </>
  )
}



export default App
