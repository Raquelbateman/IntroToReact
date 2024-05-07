const ListGroup = () => {
  const items = ["New York", "Tokyo", "London", "Paris"];

  return (
    //JSX we must have one

    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
