import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const index = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <Switch>
          <Route path='/create-blog'>
            <CreateBlog />
          </Route>
          <Route path='/detail-blog'>
            <DetailBlog />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <p>footer</p>
    </div>
  )
}

export default index
