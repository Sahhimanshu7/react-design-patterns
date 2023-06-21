import { useState } from "react";



const ReactHooks = () => {
    
    const [counter, setCounter] = useState(0);
    const handleCounter = (operation) =>{
        if(operation == 'add' )
        {
            return setCounter(counter + 1);
        }
        return setCounter(counter - 1);
    }
    
    return(
        <div>
            Counter : {counter} <br />
            <button onClick={() => handleCounter('add')}>+ Add</button>
            <button onClick={() => handleCounter('subtract')}>- Subtract</button>
        </div>
    )
    
}

export default ReactHooks;