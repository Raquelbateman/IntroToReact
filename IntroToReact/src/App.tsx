//import Message from "./Message";
import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup/ListGroup";
import MyuseStateExample from "./Components/useStateExample";
import { GiBalloonDog } from "react-icons/gi";
import Counter from "./Components/Counter/Counter";

function App() {
  // this is from our list group that we cut out and put here instead
  //
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // typically to handle the button with an input for it we would do this instead unlike our first button which is okay but not common practice
  const handleClick = () => {
    console.log("Clicked from our helper function");
  };

  // to use the setDisplay use state for the button and alert the usestate should live where its being used
  const [display, setDisplay] = useState(false);

  // this will toggle our alert buttons
  const setDisFunction = () => {
    setDisplay(!display);
  };
// learn how to update an objectin our useState,
const [drink, setDrink] = useState({
  title:"Americano",
  price: 8

});


// create a function to update the price of our drink object in our useState
const handledrink=() => {
  const newDrink = {

    title:drink.title,
    price: 10
  }

  setDrink(newDrink);
  console.log(drink.price);

}

//create a useState with nested objects and update

const [customer, setcustomer] = useState({

name:"Jose",
address:{
  city:"Stockton",
  zipCode: 94402
}

});


//create a function to handle updating a nested object
// update the zip code: 95212
const handleCustomer = () =>
{
  setcustomer({...customer,address:{...customer.address,zipCode:95212}})
};



  return (
    <>
      <div>
        <GiBalloonDog color="purple" size={80} />

        {display ? (
          <Alert closeAlertFunc={setDisFunction}>ALERT! ALERT! ALERT!</Alert>
        ) : null}
        <Button color="warning" onClickFunction={setDisFunction}>
          Click for New Alerts
        </Button>
        <Button color="primary" onClickFunction={handleClick}>
          One Button
        </Button>
        <Button color="secondary" onClickFunction={handleClick}>
          Two Button
        </Button>
        <Button color="success" onClickFunction={handleClick}>
          Tres Button
        </Button>
        <Counter />

        <ListGroup
          onSelectedItem={handleSelectItem}
          items={items}
          heading="Cities"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={students}
          heading="Students"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={cars}
          heading="List of Cars"
        />
      </div>
      <div>
        <MyuseStateExample />
      </div>
      <div></div>
    </>
  );
}
export default App;
