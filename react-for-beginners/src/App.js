import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if(keyword !=="" & keyword.length > 5) {
      console.log("SERACH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    if(counter !=="") {
      console.log("I run when 'counter changes");
    }
  }, [counter]);

  return (
    <div>
      <h1>Welcome Back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
