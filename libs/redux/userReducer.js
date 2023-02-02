import { createSlice } from '@reduxjs/toolkit'
const initialState = { isLogged: false }
const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      Login: (state, action) => {
         return action.payload
      },
      Logout: (state, action) => {
         return (state = initialState)
      },
   },
})

export const { Login, Logout } = userSlice.actions
export default userSlice.reducer
