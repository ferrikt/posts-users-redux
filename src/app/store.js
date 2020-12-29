import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features//posts/postsReducer'
import usersReducer from '../features/users/usersReducer'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
