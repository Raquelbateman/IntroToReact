import { useState } from "react";


//typescrip has a feature called interface
//using an interface we can define the shape of our objects
//{items: [], heading :string}

interface ListProps{

  items: string []
  heading: string
}

const ListGroup = ({items, heading}:ListProps) => {
  let items = ["New York", "Tokyo", "London", "Paris"];
 

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [name,setName] = useState("David");



  // console.log(useState(-1));
  //Event handler which is a function to handle an event
  // e stands for event
  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  // items = [];
  // const updateIndex = () => {
   
  //   setSelectedIndex(index);
  //   console.log(selectedIndex);

  // }

  const updateIndex = (index:any) =>{
  setSelectedIndex(index);
  console.log(selectedIndex);
  console.log(index, "This is just the index");
  }

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
               : 'list-group-item'
              } 

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
