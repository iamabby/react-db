import React, { Component } from 'react';
import './App.less';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from  "./component/Home/Home";
import Group from "./component/Group/Group";
import Tab from './component/Tab/Tab';
class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Tab />
       <div className="content_box">
       <Switch>
         <Route exact path="/Home" component={Home} />
         <Route exact path="/Group" component={Group} />
       </Switch></div>
       </div>
     </Router>
    );
  }
}

export default App;
