import { createSlice } from '@reduxjs/toolkit'


const initialState= {
  counter:10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.counter = state.counter+ 2
    },
    decrement: (state,action) => {
       
      state.counter -= action.payload
      console.log(action.payload);
      }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions
