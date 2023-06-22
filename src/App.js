import './App.css';
import ReactHooks from './ReactHooks';
import { useState, useEffect } from 'react';
import Todo from './Todo';

const handleClick = (e) =>{
  const toggleButton = e.target.classList;
  if(toggleButton.contains('on'))
  {
    toggleButton.remove('on')
    toggleButton.add("off")
  }else
  {
    toggleButton.remove("off")
    toggleButton.add("on")
  }
} 
const App = () =>{
  const [counterStatus, setCounterStatus] = useState(false);
  
  const IsCounterOn = counterStatus;

  return(
    <div>
      <button onClick={(e)=>{
        handleClick(e);
        if (counterStatus == false) {
          setCounterStatus(true); 
        } else {
          setCounterStatus(false); 
        }
        }} 
        className='off'>
          Load counter
      </button>  
      { IsCounterOn && <ReactHooks /> } 
      <Todo />
    </div>
  )
}

export default App;
