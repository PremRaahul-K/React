function ListGroup() {
  const items = ["Paris", "London", "Canada", "Vizag", "Tirupathi"];
  return (
    <>
      <h1>List</h1>
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
