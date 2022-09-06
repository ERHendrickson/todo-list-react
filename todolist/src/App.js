import React, {useState} from "react";
import './App.css';
import Todo from "./components/Todo";

function App() {
// get and set for a todo
  const [newTodo, setNewTodo] = useState("");
//get and set for all todos
  const [allTodo, setAllTodo] = useState([]);

//handle function for form submit
  const handleNewTodo = (e) => {
    //prevents page refresh on form submit
    e.preventDefault();
    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setAllTodo([...allTodo, todoItem]);
    setNewTodo("");
  }
//delete function will re render list but with the index of the item deleted removed
  const handleDelete = (delItem) => {
    const newList = allTodo.filter((_todo, index) => {
      return index !== delItem;
    });
    setAllTodo(newList);
  }

// toggle checkbox
const toggleTodo = (index) => {
  const updateAllTodo = allTodo.map((todo, i) => {
    if(index === i){
      const updateTodo = { ...todo, complete: !todo.complete};
      return updateTodo;
    }
    return todo;
  });

  setAllTodo(updateAllTodo);
}

// ******************** display ********************************

  return (
    <div className="App">
      <form onSubmit={(e) =>{
        handleNewTodo(e);
      }}>
        {/* one way data binding */}
        <input onChange={(e) => {
          setNewTodo(e.target.value)
        }} 
        type="text"
        // two way data binding
        value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>
      {/* map an array of todo objects */}
      {allTodo.map((todo, index) => {
          return (
            <Todo key={index} 
                  index={index} 
                  todo={todo}
                  toggleTodo={toggleTodo}
                  handleDelete={handleDelete}
              />)
            ;
      })}
    </div>
  );
}

export default App;
