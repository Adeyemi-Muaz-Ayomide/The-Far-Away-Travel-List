import PackingItem from "./PackingItem";

const PackingList = ({ items, onDeleteItem }) => {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  //   { id: 3, description: "charger", quantity: 1, packed: true },
  // ];
  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <PackingItem key={item.id} item={item} onDeleteItem={onDeleteItem}/>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
