import React from 'react';

const TodoForm=({val, setVal, btnAdd, todos, setTodos})=>{


    const btnForm=()=>{
        btnAdd(val)
       setVal('')
       console.log("Value>>>",val);
    }
    return(
        <>
            <div>
                <input 
                value={val}  
                onChange={(e)=>setVal(e.target.value)} 
                type="text" placeholder='Напишите что-нибудь ....' name="" id="" />
                <button onClick={()=>btnForm()}>Add</button>
            </div>
        </>
    )
}

export default TodoForm;