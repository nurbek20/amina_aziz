import React from "react";
import TodoForm from "./TodoForm/TodoFrom";
import TodoList from "./TodoList/TodoList";
import { useState } from "react";

const Home = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);
  const btnAdd = (inpVal) => {
    console.log("inpVal>>>", inpVal);
    if (inpVal) {
      const newItem = {
        id: Math.random().toString(36).slice(3.9),
        text: inpVal,
        complete:false,
        change:false
      };
      setTodos([...todos, newItem])
      console.log("Todos>>>",todos);
    }
  };
  const btnDel = (id) => {
    setTodos([
      ...todos.filter((item)=>item.id !==id)
    ])
  };
  const btnToggle = (id) => {
    setTodos([
      ...todos.map((item)=>item.id===id?{...item, complete: !item.complete}:{...item})
    ])
  };
  const btnChange = () => {};
  const btnAfterChange = () => {};

  return (
    <>
      <h1>Number of Todos</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        btnAdd={btnAdd}
        val={val}
        setVal={setVal}
      />
     {
        todos.map((item)=>{
            return(
                <TodoList
                item={item}
                btnAfterChange={btnAfterChange}
                btnDel={btnDel}
                btnToggle={btnToggle}
                btnChange={btnChange}
                />
            )
        })
     }
    </>
  );
};
export default Home;
