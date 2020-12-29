import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../posts/postsReducer'
import usersReducer from '../posts/usersReducer'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
