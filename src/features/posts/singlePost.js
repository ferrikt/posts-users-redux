import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function SinglePost({ match }) {
  const posts = useSelector((state) => state.posts)
  const { postId } = match.params

  const post = posts.find((x) => x.id === postId)

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}

export default SinglePost
