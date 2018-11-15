import React, { Component } from 'react';
import './App.less';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from  "./component/Home/Home";
import Group from "./component/Group/Group";
import Tab from './component/Tab/Tab';
import Detail from "./component/Detail/Detail";
import Search from "./component/Search/Search";
import Book from './component/Book/Book';
import Movie from './component/Movie/Movie';
import Login from './component/Login/Login';
import Dialog from './component/Dialog/Dialog';
class App extends Component {
  render() {
    return (
     <Router>
        <div>
          <Tab />
          <div className="content_box">
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
               <Route exact path="/Login" component={Login} />
              <Route exact path="/" component={Dialog} />
              <Route path="/Movie" component={Movie} />
              <Route exact path="/Group" component={Group} />
              <Route path="/Detail/:id" component={Detail} />
              <Route path="/Search" component={Search} />
              <Route path="/Book" component={Book} />
            </Switch>
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
