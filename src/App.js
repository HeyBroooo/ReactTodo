import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, QuerySnapshot, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { async } from '@firebase/util';

function App() {
    const [todolist, setTodolist] = useState ([]);
    const [Input, setInput] = useState ("")


      //get todos
      useEffect (() => {
        const q = query(collection(db, "todos"));
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
          let items = [];
          QuerySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id});
          });
          setTodolist(items);
           });
      }, []);

      //add todo

      const addTodo = async (e) => {
        e.preventDefault();
        if (Input === "") return;
        else {
          await addDoc (collection(db, "todos") ,{
            text: Input,
            Completed: false,
          });
            setInput("");
        }
      };
    //update todo

    const updateTodo = async (todo) => {
      await updateDoc(doc(db, "todos", todo.id),{
        Completed: !todo.Completed,
    });
  };

  ///delete todo
     const deleteTodo = async (todo) => {
       await deleteDoc(doc(db, "todos", todo.id));
    };

  return (
    <div className="App">
     <div className="todoCard">
      <h1>Todo List</h1>
      <div className="row">
           <input type="text" placeholder="Enter Todo" className="todoInput"
            onChange={(e) => setInput(e.target.value)}
            />
           <button className='addition' onClick={addTodo}>Add</button>
      </div>
      <br></br>
      <div className='todolist'>
       {todolist.map  ((todo, index) => (
        <div className='todoItem' key={index}>
          <div>
          <input typpe='checkbox'onClick={() => updateTodo(todo)}
          checked= {todo.Completed ? "checked" : ""}
          />
            <p onClick={() => updateTodo(todo)} 
            style={{textDecoration: todo.Completed ? "line-through" : "" }}
             >{todo.text}</p>
            </div>
            <button className='deletebtn' onClick={() => deleteTodo(todo)}> Delete </button>
            </div>
          
           ))}
            
          </div>
       </div>
    </div>
  );
}

export default App;
