import React,{Component} from "react";
import "./Search.less";
import axios from "axios";
import {Link} from "react-router-dom";

class Search extends Component{
    constructor() {
        super();
        this.state = {
            name: "",
            showView: [],
            dis_no: "none",
        }
    }
    searchChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeShowView = (e) => {
        axios.get(`/v2/movie/search?q=${this.state.name}`)
            .then((response) => {
                console.log(response.data.subjects);

                this.setState({
                    showView: response.data.subjects,
                    dis_no: response.data.subjects.length > 0 ? 'none' : 'block'
                });


            })
            .then((error) => {
                console.log(error);
            })

    }
render(){
    return(
        <div className="search_bar">
                <input type="text" placeholder="请输入关键词"
                    value={this.state.name}
                    onChange={(e) => { this.searchChange(e) }}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            this.changeShowView();
                        }
                    }}
                />
                <div className="tips" style={{ "display": this.state.dis_no }}>没有你搜索的内容，请重新输入关键字</div>
                <div>
                    
                    {
                        this.state.showView.map((item, index) => {
                            return (
                                <Link to={"/Detail/" + item.id} key={index} >
                                <div className="search_list" >
                                    <img src={item.images.large} alt="" />
                                    <div className="list_infos">
                                        <p>{item.title}</p>
                                        <p>{item.year}</p>
                                    </div>
                                </div>
                                </Link>
                                
                            )
                        })
                    }
                </div>
            </div>
    )
}
}

export default Search;
