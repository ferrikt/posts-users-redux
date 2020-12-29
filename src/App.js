import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { useSelector } from 'react-redux'
import AppPost from './posts/addPost'

function App() {
  const posts = useSelector((state) => state.posts)

  debugger
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <h2>Welcome to the Redux Essentials example app!</h2>

                {posts &&
                  posts.map((post) => (
                    <article key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.content}</p>
                    </article>
                  ))}

                <AppPost />
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
