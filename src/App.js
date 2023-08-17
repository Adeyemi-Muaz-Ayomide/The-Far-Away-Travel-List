import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import './index.css'

function App() {
  const [items, setItems] = useState([])

  const handleAddItems = (item) => {
    setItems((prevItem) => [...prevItem, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
