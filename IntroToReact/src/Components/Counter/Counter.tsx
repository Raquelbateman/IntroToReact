import {useState} from 'react';
import Styles from './Counter.module.css';

const Counter = () => {


//we need a use state
    const [counter, setCounter] = useState(0)
//Two functions one to handle our increment

const handleIncrement = () => {
setCounter(counter + 1)
console.log(counter)
   
}
// One function to handle iour decrement


return (
    <>
    
    <button onClick= {handleIncrement}>+</button>
    <span>{counter}</span>
    <button>-</button>
    
    
    
    
    
    </>





)


}

export default Counter