import { useState,useEffect } from "react"

const Todo = () =>{
    const [inputTodo, setInputTodo] = useState('');
    const [listItem, setListItem] = useState([]);
    let id = 0;

    const handleCreate = (e) =>{
        e.preventDefault();
        setListItem([...listItem,inputTodo]);
        setInputTodo('');
    }

    return(
        <div>
            <form onSubmit={handleCreate}>
                <p>Enter the Todo Item : </p>
                <input onChange={(e)=>setInputTodo(e.target.value)} value={inputTodo}></input>
                <button type="submit">Create</button>
            </form>
            {listItem.map((items)=>{
                id = id + 1;
                return <li key={id}>{items}</li>
            })}
        </div>
    )
}

export default Todo;