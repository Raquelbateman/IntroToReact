const ListGroup = () => {
  let items = ["New York", "Tokyo", "London", "Paris"];

    // items = []
    // if(items.length == 0)
    //     {
    //         return 
    //         <>
    //         <h1>List</h1>
    //         <p>No Items found</p>
    //         </>
    //     };




  return (
    //JSX we must have one parent element. Example, div, fragment or <></>

    <>
  {items.length == 0 ? <p>No Items Found</p>: null}
   
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
