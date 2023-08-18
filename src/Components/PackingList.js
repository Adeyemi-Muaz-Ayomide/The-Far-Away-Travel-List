import PackingItem from "./PackingItem";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList}) => {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  //   { id: 3, description: "charger", quantity: 1, packed: true },
  // ];
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
};

export default PackingList;
