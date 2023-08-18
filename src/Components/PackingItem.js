const PackingItem = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
      <span className={item.packed ? 'slash' : '' }>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackingItem;
