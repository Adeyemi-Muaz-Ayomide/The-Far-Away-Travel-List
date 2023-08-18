import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((prevItem) => [...prevItem, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    if (!items.length) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
