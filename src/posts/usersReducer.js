import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'John Black' },
  { id: 2, title: 'Anna Karenina' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

//export const { addPost, postUpdated } = postsSlice.actions

export default usersSlice.reducer
