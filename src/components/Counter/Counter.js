import classes from './Counter.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const decrementValueHandler = () => {
    setCounterValue((prevCounterValue) => prevCounterValue - 1);
  };
  const resetValueHandler = () => {
    setCounterValue(0);
  };
  const incrementValueHandler = () => {
    setCounterValue((prevCounterValue) => prevCounterValue + 1);
  };
  const squareValueHandler = () => {
    setCounterValue((prevCounterValue) => prevCounterValue ** 2);
  };
  return (
    <Card className={classes.counter}>
      <div className={classes['counter-contents']}>
        <div className={classes['counter-value']}>
          <p>{counterValue}</p>
        </div>
        <div className={classes.controls}>
          <Button onClick={decrementValueHandler}>--</Button>
          <Button onClick={resetValueHandler}>Reset</Button>
          <Button onClick={incrementValueHandler}>++</Button>
          <Button onClick={squareValueHandler}>^2</Button>
        </div>
      </div>
    </Card>
  );
};

export default Counter;
