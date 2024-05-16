import Styles from './Counter.module.css';

const Counter = () => {

let counter = 0
//we need a use state

//Two functions one to handle our increment
// One function to handle iour decrement
const handleIncrement = () => {

    counter++;
    console.log(counter)

}

return (
    <>
    
    <button onClick= {handleIncrement}>+</button>
    <span>{counter}</span>
    <button>-</button>
    
    
    
    
    
    </>





)


}

export default Counter