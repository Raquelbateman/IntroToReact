//import Message from "./Message";
import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button"
import ListGroup from "./Components/ListGroup";
import MyuseStateExample from "./Components/useStateExample";


function App() {
  // this is from our list group that we cut out and put here instead
  //
  let items = [
    "New York", 
    "San Francisco", 
    "Tokyo", 
    "London", 
    "Paris"
  ];

  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];

  let cars = [
    "Volvo",
    "Volkswagen",
    "Toyota",
    "Ford",
    "Mercedes-Benz",
    "BMW",
    "Kia",
    "Audi",
    "Renault",
    "Nissan",
    "Chevrolet",
    "Mazda",
  ];

  const handleSelectItem = (item:string) => {
    console.log(item);
  }

  // typically to handle the button with an input for it we would do this instead unlike our first button which is okay but not common practice
  const handleClick = () => {
    console.log("Clicked from our helper function");
  }

  // to use the setDisplay use state for the button and alert the usestate should live where its being used
  const[display, setDisplay] = useState(false);

  // this will toggle our alert buttons
  const setDisFunc = () => {
    setDisplay(!display);
  }

  return (
    <>
      <div>
       
        {display ? <Alert closeAlertFunc={setDisFunc}>Click Me For Latest Alerts</Alert> : null}
        <Button color="warning" onClickFunction={setDisFunc}>Click for New Alerts</Button>
        <Button color="primary" onClickFunction={handleClick}>One Button</Button>
        <Button color="secondary" onClickFunction={handleClick}>Two Button</Button>
        <Button color="success" onClickFunction={handleClick}>Tres Button</Button>

        <ListGroup onSelectedItem={handleSelectItem} items={items} heading="Cities" />
        {/* if we want to make a second list we can use props or properties */}
        <ListGroup onSelectedItem={handleSelectItem} items={students} heading="Students" />
        <ListGroup onSelectedItem={handleSelectItem} items={cars} heading="List of Cars" />
      </div>
      <div>
        <MyuseStateExample />
      </div>
      <div>
        <Counter />
      </div>
      {/* //return <div><h1>Hello World</h1></div> */}
    </>
  );
}
export default App;
