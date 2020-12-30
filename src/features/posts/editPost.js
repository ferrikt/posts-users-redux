import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { postUpdated, selectPostById } from './postsReducer'

function EditPost({ match }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const updatePostHandler = (e) => {
    const newPost = {
      title,
      content,
      id: post.id,
    }

    dispatch(postUpdated(newPost))

    history.push(`/posts/${postId}`)
  }
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

  return (
    <section>
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
        <button type="button" onClick={updatePostHandler}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default EditPost
