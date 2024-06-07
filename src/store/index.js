// import {createStore} from 'redux';
import { configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';

import authReducer from './auth'



const store = configureStore({
    reducer : {counter : counterReducer, auth : authReducer}
});

export default store;


// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// const store = configureStore({
//   reducer: counterSlice.reducer
// });

// export const counterActions = counterSlice.actions;

// export default store;