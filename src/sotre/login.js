import { observable, action } from 'mobx';
import axios from 'axios';

class Store {
    @observable name = "";
    @observable pass = "";

    @action
    doLogin() {
        let params = {
            account: this.name,
            password: this.pass
        }
        axios.post('https://www.taitansmart.com/gemini/user/login', params).then(rs => {
            if (rs.data.result_code === "10000") {
                // 存储登录数据
                localStorage.setItem('account', JSON.stringify(rs));
                window.location.href = "/";
            }
        })
    }
    @action
    setName(val) {
        this.name = val;
    }
    @action
    setPass(val) {
        this.pass = val;
    }
}
const loginData = new Store();
export default loginData

