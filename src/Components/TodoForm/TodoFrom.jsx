import React from 'react';

const TodoForm=({val, setVal, btnAdd, todos, setTodos})=>{
    const keyPress = (e) => e.key === 'Enter' ? btnForm(): '';


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
                onKeyPress={(e) => keyPress(e)}
                onChange={(e)=>setVal(e.target.value)} 
                type="text" placeholder='Напишите что-нибудь ....' name="" id="" />
                <button onClick={()=>btnForm()}>Add</button>
            </div>
        </>
    )
}

export default TodoForm;