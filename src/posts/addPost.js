import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../posts/postsReducer'
import { nanoid } from '@reduxjs/toolkit'

function AppPost() {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addPostHandler = (e) => {
    const newPost = {
      title,
      content,
      id: nanoid(),
    }

    dispatch(addPost(newPost))

    setTitle('')
    setContent('')
  }
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

  return (
    <>
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

        <label>
          Post content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={textChanged}
          />
        </label>
        <button type="button" onClick={addPostHandler}>
          Save Post
        </button>
      </form>
    </>
  )
}

export default AppPost
