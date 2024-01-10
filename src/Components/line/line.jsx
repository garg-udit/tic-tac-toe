import Box from "../box/box";

function Line({x, setIsXActive,isXActive,playerA,setPlayerA,playerB,setPlayerB}) {
    // console.log('x', x)
  return (
    <div style={{ width: "200px",display: "flex", flexDirection: "row"}}>
        {[0,1,2].map((e, index)=> <Box key={x+""+e} x={x} y={e} index={(x*3)+e} isXActive={isXActive} setIsXActive={setIsXActive} playerA={playerA} setPlayerA={setPlayerA} playerB={playerB} setPlayerB={setPlayerB}/>)}
    </div>
  );
}

export default Line;
