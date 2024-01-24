import React from 'react';
import { useUnit} from 'effector-react';
import { $counter, incrementNumber, decrementNumber, randomNumber } from './api/stores/counter';


export default function Home() {
  const counter = useUnit($counter);


  return (
    <div className='all'>
      <h1 className='titles'>Число: {counter}</h1>
      <div className='buttons-cotainer'>
      <button  className='button' onClick={() =>    incrementNumber()}>УВЕЛИЧИТЬ</button>
      <button  className='button' onClick={() =>    decrementNumber()}>УМЕНЬШИТЬ</button>
      <button  className='button' onClick={() =>    randomNumber()}>РАНДОМ</button>
      </div>
    </div>
  );
}
