import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Blogs from './Blogs';
import BlogDetails from './BlogDetails';
import AddBlog from './AddBlog';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Blogs />
            </Route>
            <Route path="/show-blog-detail/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/add-blog">
              <AddBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;