import './App.css';

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
    </div>
  )
}

export default App;
