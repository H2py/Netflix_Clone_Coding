import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDo(currentArray => []);
  };
  console.log(toDo);
  return <div>
    <form>
      <input 
      onChange={onChange}
      value={toDo}
      type="text"
      placeholder="Write your to do..."
      />
    </form>
    <button>Add To Do</button>
  </div>
}

export default App;
