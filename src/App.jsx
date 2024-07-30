import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import Calculadora from './components/Calculadora'

function HelloWorld() {
 return <p>HelloWorld</p>

}

function App() {
  return(
  <>
  <HelloWorld></HelloWorld>
  <Mensagem texto="helloWorld"></Mensagem>
  {/* <Frase></Frase> */}
  <Calculadora></Calculadora>
  </>
  )
} 

export default App
