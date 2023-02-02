import { createSlice } from '@reduxjs/toolkit'
const initialState = []
const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      getData: (state, action) => {
         return action.payload
      },
   },
})

export const { getData } = dataSlice.actions
export default dataSlice.reducer
