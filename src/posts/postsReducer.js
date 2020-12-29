import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'post 1', content: 'description for post 1' },
  { id: '2', title: 'post 2', content: 'description for post 2' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload)
    },
  },
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
