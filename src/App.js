import './App.css';
import ReactHooks from './ReactHooks';
import { useState } from 'react';
import renderIf from 'react-only-if';



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
  const stateChanger = () => {
    setCounterStatus(true);
  }
  const IsCounterOn = renderIf(counterStatus == true);
  return(
    <div>
      <button onClick={(e)=>{
        handleClick(e);
        stateChanger();
        }} 
        className='off'>
          Load counter
      </button>  
      {IsCounterOn(
          <ReactHooks /> 
      )} 
    </div>
  )
}

export default App;
