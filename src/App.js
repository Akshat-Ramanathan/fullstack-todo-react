import Form from './components/Form';
import Todos from './components/Todos';
import { useEffect, useState } from 'react';
import { API } from './constants';
import axios from 'axios';
// import data from './mockdb';

function App(props) {

  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${API}`);
      setTodos(response.data);
    }
    fetchData();
  }, []);

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
