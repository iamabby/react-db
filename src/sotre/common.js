import {observable,action} from 'mobx';

class Store{
    @observable isLogin=false;
    @observable loginData = {};
    @action
    doIsLogin() {
        let data = localStorage.getItem("account")
        if(data === null) {
            this.isLogin = false
        } else {
            this.isLogin = true
            this.loginData = data
        }
    }
}
const commonData = new Store();
export default commonData

