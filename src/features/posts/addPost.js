import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { unwrapResult } from '@reduxjs/toolkit'

import { addNewPost } from './postsReducer'
function AppPost() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const [userId, setUserId] = useState('')

  const users = useSelector((state) => state.users)

  const onAuthorChanged = (e) => setUserId(e.target.value)

  const textChanged = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'content':
        setContent(e.target.value)
        break
      default:
        break
    }
  }

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          addNewPost({ title, content, user: userId })
        )
        unwrapResult(resultAction)
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

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
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AppPost
