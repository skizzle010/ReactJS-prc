import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 3, packed: false },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Header = () => {
  return <h1>🏝️Far Away🧳</h1>;
};

const Form = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);

  function handleInput(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleInput}>
      <h3>what do you need for your😍 trip?</h3>
      <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = (props) => {
  return (
    <li>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already paccked X (X%)</em>
    </footer>
  );
};

export default App;
