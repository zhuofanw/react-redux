import { INCREMENT, DECREMENT } from '../constants/index.js';

export const increment = () => {
    return {
      type: INCREMENT //type后跟字符串
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};