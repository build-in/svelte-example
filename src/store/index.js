
import { writable } from 'svelte/store';
// @ts-ignore
import { people } from './otherStore';

export const count = writable(0);
export const peopleStore = writable(people);
  


  