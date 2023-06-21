import './App.css';
import ReactHooks from './ReactHooks';

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
  

  return(
    <div>
      <button onClick={handleClick} className='off'>Click Me!</button>   
      <ReactHooks />  
    </div>
  )
}

export default App;
