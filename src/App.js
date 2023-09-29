import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewToDoForm';

function App() {

  const [showAddToDoForm, setshowAddToDoForm] = useState(false);

  const [todos, setTodos] = useState( [
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One'}
  ])

  const addTodo = (description,assigned) => {
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos(todos => [...todos,newTodo])          
  }

  const deleteTodo = (deleteToDoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteToDoRowNumber
    });
    setTodos(filtered);
  }
  
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>  
          <button type="button" className="btn btn-primary" onClick={() => setshowAddToDoForm(!showAddToDoForm)}>
            {showAddToDoForm ? 'Close New Todo' : 'New Todo'}</button>
          {showAddToDoForm && <NewToDoForm addTodo={addTodo}/> }                  
        </div>
      </div>      
    </div>
  );
}

export default App;
