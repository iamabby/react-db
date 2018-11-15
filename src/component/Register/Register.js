import React,{Component} from "react";

import {Link} from "react-router-dom";
import "./Register.less";
import close from "../../images/icon-close.png";
import axios from "axios";




class Register extends Component{
    constructor(){
        super();
        this.state={
          userName:"",
          passWord:"",
          tips:""
        }
    }
    userNameChange(e){
        this.setState({
            userName:e.target.value
        })
        console.log(e.target.value)
    }
    passWordChange(e){
        this.setState({
            passWord:e.target.value
            
        })
        console.log(e.target.value)
    }
    registerFun(){
        if(!this.state.userName){
          this.setState({
              tips:"用户名不能为空"
          })
        }
        if(!this.state.passWord){
            this.setState({
                tips:"密码不能为空"
            })
        }

        
       
            axios({
                method: 'POST',
                url:"https://www.taitansmart.com/gemini/user/register",
                data:{
                    account: this.state.userName,
                    password: this.state.passWord
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then((respones)=>{
                //校验账号
                console.log(respones.result_code);

                        if (respones.result_code == "20000") {
                        console.log("你的邮箱号已经注册过了")
                            return false;
                        }
                        //注册成功
                        if (respones.result_code == "00001") {
                            console.log("恭喜你，注册成功了~~");
                            //重定向
                            this.props.history.push('/Login');
                        }
                        //账号或密码为空
                        if (respones.result_code == "10000") {
                            console.log("你的账号或密码为空");
                            return false;
                        }
            })
            .then(error=>{
                console.log(error);
            })
        

        
    }
  render(){
      return(
               <div className="login_all">
                <img src={close} className="close" />
                <h2 className="title">注册豆瓣</h2>
                <div className="btn_block">
                    <input type="text" placeholder="用户名或手机号"  value={this.state.userName} onChange={(e)=>{this.userNameChange(e)}}/>
                    <input type="password" placeholder="密码" value={this.state.password} onChange={(e)=>this.passWordChange(e)}/>
                    <div className="tips">{this.state.tips}</div>
                    <input type="button" value="注册" className="login_btn" onClick={()=>{this.registerFun()}} />
                </div>
                <div className="find_pwd">
                    <Link to="/Login" >注册</Link>
                </div>

          </div>
      )
  }
}

export default Register;