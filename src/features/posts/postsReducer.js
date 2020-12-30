import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { client } from '../../api/client'

export const selectAllPosts = (state) => state.posts.items

export const selectPostById = (state, postId) =>
  state.posts.items.find((post) => post.id === postId)

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.posts
})

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
          },
        }
      },
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.items.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },

    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.items.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.items = state.items.concat(action.payload)
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const { addPost, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
