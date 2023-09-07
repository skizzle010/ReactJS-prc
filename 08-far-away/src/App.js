import { useState } from "react";

const initialItems = [];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Header />
      <Form addItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

const Header = () => {
  return <h1>🏝️Far Away🧳</h1>;
};

const Form = (props) => {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  function handleInput(e) {
    if (!description) return;
    e.preventDefault();

    const newItem = { description, count, packed: false, id: Date.now() };
    console.log(newItem);
    props.addItems(newItem);

    setDescription("");
    setCount(1);
    console.log(initialItems);
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
};

const PackingList = (props) => {
  return (
    <div className="list">
      <ul>
        {props.items.map((item) => (
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
        {props.item.count} {props.item.description}
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
