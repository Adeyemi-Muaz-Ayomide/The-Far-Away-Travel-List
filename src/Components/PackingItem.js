const PackingItem = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span className={item.packed ? 'slash' : '' }>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackingItem;
