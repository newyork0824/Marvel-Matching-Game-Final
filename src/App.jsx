import "./Styles.css";
import React,{useState} from 'react'
import StartGameMenu from './StartGame.jsx'
import MemeryGame from './MemeryGame.jsx'
import {Context} from "./Context.jsx"

export default function App() {
const {gameStarted} = React.useContext(Context)



  return (
    <div className="App">
    {!gameStarted ? <MemeryGame /> : <StartGameMenu/>}
   

    </div>
  );
}