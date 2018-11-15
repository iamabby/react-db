import React,{Component} from "react";

import {Link} from "react-router-dom";
import "./Register.less";
import close from "../../images/icon-close.png";



class Register extends Component{
  render(){
      return(
               <div className="login_all">
                <img src={close} className="close" />
                <h2 className="title">注册豆瓣</h2>
                <div className="btn_block">
                    <input type="text" placeholder="用户名或手机号"/>
                    <input type="password" placeholder="密码"/>
                    <div className="tips">账号或密码不正确</div>
                    <input type="button" value="注册" className="login_btn"/>
                </div>
                <div className="find_pwd">
                    <Link to="/Login">登录</Link>
                </div>

          </div>
      )
  }
}

export default Register;