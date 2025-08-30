import type { MouseEvent } from "react";

function ListGroup() {
  const listName = "Cities";
  const items = ["New York", "America", "Tokyo", "London", "San Francisco"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{listName}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
