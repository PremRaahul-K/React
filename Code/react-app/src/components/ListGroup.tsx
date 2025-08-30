function ListGroup() {
  const listName = "Cities";
  let items = ["New York", "America", "Tokyo", "London", "San Francisco"];
  items = [];

  return (
    <>
      <h1>{listName}</h1>
      {items.length === 0 && <p>No item found</p>}
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
