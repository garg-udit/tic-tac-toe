import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/board/board';
import { checkWinner } from './helpers/helper';

function App() {
  const [isXActive, setIsXActive] = useState(true)
  const [playerA, setPlayerA] = useState([])
  const [playerB, setPlayerB] = useState([])
  const [winner, setWinner] = useState('')
  useEffect(()=> {
    if(playerA.length && playerB.length ){
      const winnerB = checkWinner(playerB);
      const winnerA = checkWinner(playerA);
      if(winnerA || winnerB) {
        const winner = winnerA ? 'Player A': 'Player B'
        setWinner(winner)
      }
    }    
  }, [playerA, playerB])

  return (
    <>
    {winner && <h1>{winner}</h1>}
    <div style={{marginTop: "100px", marginLeft: "100px"}}>
      <Board isXActive={isXActive} setIsXActive={setIsXActive} playerA={playerA} setPlayerA={setPlayerA} playerB={playerB} setPlayerB={setPlayerB}/>
      <Board isXActive={isXActive} setIsXActive={setIsXActive} playerA={playerA} setPlayerA={setPlayerA} playerB={playerB} setPlayerB={setPlayerB}/>
    </div>
    </>

  );
}

export default App;
