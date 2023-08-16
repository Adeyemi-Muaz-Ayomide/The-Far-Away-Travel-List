const PackingItem = ({ item }) => {
  return (
    <li>
      <span className={item.packed ? 'slash' : '' }>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default PackingItem;
