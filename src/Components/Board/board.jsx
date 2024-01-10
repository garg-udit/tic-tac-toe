import Line from "../line/line";

function Board({setIsXActive,isXActive,playerA,setPlayerA,playerB,setPlayerB}) {
  return (
    <div style={{ width: "200px",display: "flex", flexDirection: "column" ,border: "2px solid black"}}>
        {[0,1,2].map((e, index)=> <Line key={e} x={e} isXActive={isXActive} setIsXActive={setIsXActive} playerA={playerA} setPlayerA={setPlayerA} playerB={playerB} setPlayerB={setPlayerB}/>)}
     </div>

  );
}

export default Board;
