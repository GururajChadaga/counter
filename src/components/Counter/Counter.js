import classes from './Counter.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';


const Counter = () => {
  return <Card className={classes.counter}>
    <div className={classes['counter-contents']}>
      <div className={classes['counter-value']}>
        <p></p>
      </div>
      <div className={classes.controls}>
        <Button>--</Button>
        <Button>Reset</Button>
        <Button>++</Button>
        <Button>^2</Button>
      </div>
    </div>
  </Card>;
};

export default Counter;
