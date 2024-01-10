
import Board from '../Board/Board'
import './TicTacToe.css'

import React from 'react'

const TicTacToe = () => {
  return (
    <div className='boards'>
       <div><Board/></div>
       <div><Board/></div>
    </div>
  )
}

export default TicTacToe

