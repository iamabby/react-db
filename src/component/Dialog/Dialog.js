import React,{Component} from "react";
import { Link} from "react-router-dom";
import "./Dialog.less";
import close from "../../images/icon-close.png";

class Dialog extends Component{
    render(){
        return(
            <div className="dialog_box">
              <div className="dialog_content">
               <h2>继续操作需要登录豆瓣账号</h2>
               <img src={close} className="close" />
               <Link to="/Login" className="login_btn">登录</Link>
               <Link to="/Login" className="login_btn">打开APP</Link>
              </div>
            </div>
        )
    }
}

export default Dialog;