import { useState } from "react";

function App() {
    const [names, setNames] = useState(["홍길동", "김민수"]);
    const [input, setInput] = useState('');

    const handleInputChange = () => {
        setInput(e.target.value);
    };

    const handle
    return (
        <div>
            <input type="text"/>
            <button onClcik={handleUpload}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    );
}

export default App;