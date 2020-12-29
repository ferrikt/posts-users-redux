import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addPost } from './postsReducer'

function AppPost() {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [userId, setUserId] = useState('')

  const users = useSelector((state) => state.users)

  const addPostHandler = (e) => {
    dispatch(addPost(title, content, userId))

    setTitle('')
    setContent('')
  }

  const onAuthorChanged = (e) => setUserId(e.target.value)

  const textChanged = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'content':
        setContent(e.target.value)
        break
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  debugger
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section className="posts-list">
      <form>
        <h2>Add post</h2>
        <label>
          Post title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={textChanged}
          />
        </label>

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label>
          Post content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={textChanged}
          />
        </label>
        <button type="button" onClick={addPostHandler} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AppPost
