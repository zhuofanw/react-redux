import { INCREMENT, DECREMENT } from '../constants/index.js';

export const increment = () => {
    return {
      type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};