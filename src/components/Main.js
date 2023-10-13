import { useState } from "react";
import dataArray from "./Data";
import "./Main.css";

function Main() {
  const [text, setText] = useState("");
  const [Array, setArray] = useState(dataArray);

  const handleOnChange = (e) => {
    setText(e.target.value);

    if (e.target.value === "") {
      setArray(dataArray);
    } else {
      const sortedArray = dataArray.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );

      setArray(sortedArray);
    }
  };

  const handleSearch = () => {
    const sortedArray = dataArray
      .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));

    setArray(sortedArray);
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        onChange={handleOnChange}
        value={text}
        placeholder="Search by name"
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
      <ul className="list">
        {Array.map((data) => (
          <li className="list-item" key={data.id}>
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Main;
