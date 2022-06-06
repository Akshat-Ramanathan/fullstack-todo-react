import Form from './components/Form';
import Todos from './components/Todos';
import { useEffect, useState } from 'react';
import data from './mockdb';

function App(props) {

  const [todos, setTodos] = useState(null);

  useEffect(() => {
    setTodos(data.todo_list);
  }, [todos]);

  return (
    <>
      <div style={{ marginTop: "30px" }} className="ui container">
        <h1 className="ui center aligned header"><u>React Demo App</u></h1>
        <h2 className="ui center aligned header"><i>To Do Application</i></h2>
      </div>
      <hr />
      <Form />
      <hr />
      {todos && <Todos data={todos} />}
    </>
  );
}

export default App;
