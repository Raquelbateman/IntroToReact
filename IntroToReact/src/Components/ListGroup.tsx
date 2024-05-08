import { useState } from "react";


const ListGroup = () => {
  let items = ["New York", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  const arr = useState(0);

  console.log(arr);
  // console.log(useState(-1));
  //Event handler which is a function to handle an event
  // e stands for event
  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  // items = [];

  const getMessage = () => {
    return items.length == 0 ? <p>No Items Found</p> : null;
  };

  return (
    //JSX we must have one parent element. Example, div, fragment or <></>

    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
              ? 'list-group-item active'
               : 'list-group-item'} 
               key={index}
               onClick={() => console.log('${item}')}

          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
