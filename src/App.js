import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import AppPost from './posts/addPost'
import PostsList from './posts/postsList'
import SinglePost from './posts/singlePost'
import EditPost from './posts/editPost'
function App() {
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

                <PostsList />

                <AppPost />
              </section>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePost} />
          <Route exact path="/editPost/:postId" component={EditPost} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
