import { createStore, createEvent } from 'effector';

export const $counter = createStore<number>(0);

export const incrementNumber = createEvent();
export const decrementNumber = createEvent();
export const randomNumber = createEvent();


$counter.on(incrementNumber, (state) => state + 1);
$counter.on(decrementNumber, (state) => state - 1);
$counter.on(randomNumber, (state) => Math.floor(Math.random()*100));

