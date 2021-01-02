import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features//posts/postsReducer'
import usersReducer from '../features/users/usersReducer'
import notificationsReducer from '../features/notifications/notificationsReducer'
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
})
