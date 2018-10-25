import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import "./Tab.less";

class Tab extends Component{
 render(){
     return(
         <div className="tab">
            <h2>豆瓣</h2>
             <ul>
                 <li>
                     <NavLink to="/Home">电影</NavLink>
                 </li>
                 <li>
                     <NavLink to="/Group">图书</NavLink>
                 </li>
                 <li>
                     <NavLink to="/Group">广播</NavLink>
                 </li>
                 <li>
                     <NavLink to="/Group">小组</NavLink>
                 </li>
             </ul>
         </div>
     )
 }
}
export default Tab;