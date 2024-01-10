import { useState } from "react";

function Box({x,y, index, setIsXActive,isXActive,playerA,setPlayerA,playerB,setPlayerB}) {
  console.log('playerA', playerA)
    const [activeBox, setActiveBox] = useState('')
    const handleClickOnBox=()=> {
      if(activeBox === ''){
        console.log('index', index)
        if(isXActive){
          console.log(playerA, 'playerA')
          const test = playerA.concat(index)
          setActiveBox('X')
          console.log('test', test)
          setPlayerA(test)
          
        }else{
          setActiveBox('O')
          const test = playerB.concat(index)
          console.log('test', test)
          console.log(playerB, 'playerB')
          setPlayerB(test)
        }
        setIsXActive(!isXActive)
      }
    }
    return (
      <div style={{margin: "20px",height:"20px", width: "20px", border: "2px solid black", cursor: "pointer"}} onClick={handleClickOnBox}>{activeBox}</div>
    );
  }
  
  export default Box;
  