import React, { useState } from "react";

const TodoList = ({ 
    item, 
    btnDel, 
    btnToggle, 
    btnChange, 
    btnAfterChange 
}) => {
    const [val, setVal]=useState('')
  console.log("item.text", item);
  return (
    <>
      {
        item.change
        ?
        <div>
        <input 
        value={val}  
        onChange={(e)=>setVal(e.target.value)}
        type="text" placeholder={item.text} name="" id="" />
        <button onClick={()=>btnAfterChange(item.id, val)}>Change</button>
      </div>
      :
      <div>
        <span onClick={()=>btnToggle(item.id)}>
            {(item.complete?<del>{item.id}</del>:item.text)}
        </span>
        <button onClick={()=>btnChange(item.id)}>Change</button>
        <button 
        disabled={item.complete?false:true} 
        onClick={()=>btnDel(item.id)}>X</button>
      </div>
      }
    </>
  );
};
export default TodoList;
