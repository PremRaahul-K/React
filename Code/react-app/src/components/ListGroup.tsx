function ListGroup() {
  const listName = "Cities";
  const items = [
    "New York",
    "America",
    "Tokyo",
    "London",
    "SanFranscioSan Francisco",
  ];

  return (
    <>
      <h1>{listName}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
