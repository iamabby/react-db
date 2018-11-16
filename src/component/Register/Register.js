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
        //判断邮箱
        if(!this.state.userName){
          this.setState({
              tips:"用户名不能为空"
          })
          return false;
        }else{
            var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!reg.test(this.state.userName)){
                this.setState({
                    tips:"用户名不正确，请填写正确的邮箱号"
                })
                return false;
            }else{
                this.setState({
                    tips:""
                })
            }
        }

        //判断密码
        if(!this.state.passWord){
            this.setState({
                tips:"密码不能为空"
            })
            return false;
        }else{
            //密码为8-16位数字密码组合
            var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
            if(!pwdReg.test(this.state.passWord)){
               this.setState({
                   tips:"密码为8-16位数字密码组合"
               })
               return false;
            }
            else{
                this.setState({
                    tips:""
                })
            }
        }

        if(this.state.userName&&this.state.passWord){
            axios({
                method: 'POST',
                url:"https://www.taitansmart.com/gemini/user/register",
                params:{
                    account: this.state.userName,
                    password: this.state.passWord
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then((respones)=>{
                //校验账号
                console.log(respones);
                console.log(respones.result_code);

                        if (respones.data.result_code == "20000") {
                        console.log("你的邮箱号已经注册过了")
                            return false;
                        }
                        //注册成功
                        if (respones.data.result_code == "00001") {
                            console.log("恭喜你，注册成功了~~");
                            //重定向
                            this.props.history.push('/Login');
                        }
                        //账号或密码为空
                        if (respones.data.result_code == "10000") {
                            console.log("你的账号或密码为空");
                            return false;
                        }
            })
            .then(error=>{
                console.log(error);
            })

        }
       
           
        

        
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