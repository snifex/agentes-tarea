import React from 'react'
import ReactDOM from 'react-dom/client'
import { BoardComponent } from './components/BoardComponent'
import { ScoreboardComponent } from './components/ScoreboardComponent'
import { ControlComponent } from './components/ControlComponent'
import './Board.css'
import './index.css'
import './Scoreboard.css'
import './Control.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScoreboardComponent/>
    <BoardComponent
      numberRows={6}
    />
    <ControlComponent/>
  </React.StrictMode>
)
