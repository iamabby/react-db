import React from "react";
import {Link} from "react-router-dom";
import "./Login.less";
import close from "../../images/icon-close.png";


class  Login extends  React.Component{
  render(){
      return(
          <div className="login_all">

            <img src={close} className="close" />
              
              <h2 className="title">登录豆瓣</h2>
              <div className="btn_block">
                <input type="text" placeholder="用户名或手机号"/>
                <input type="password" placeholder="密码"/>
                <input type="button" value="登录" className="login_btn"/>
              </div>




              <div className="find_pwd">
                <Link to="/FindPwd">找回密码</Link>
              </div>

              {/* 第三方登录 */}
              <div className="third_login">
                <h2>第三方登录</h2>
                <Link to="https://www.douban.com/accounts/weixin" className="wx">  </Link>
                <Link to="https://www.douban.com/accounts/weixin" className="weibo">  </Link>
              </div>

          </div>
      )
  }
}

export default Login;