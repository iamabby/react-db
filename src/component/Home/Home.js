import React,{Component} from "react";
import { NavLink,Link} from "react-router-dom";
import "./Home.less";
import axios from "axios";

class Home extends Component{
    constructor(props) {
        super();
        this.state = {
            title: "",
            hotmovies: [],
            
        }
    }

    componentDidMount() {
        console.warn('ok')
        axios.get("/v2/movie/top250")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    title: response.data.title,
                    hotmovies: response.data.subjects,
                    
                })
            })
            .then((error) => {
                console.log(error);
            })
    }
 render(){
     return(
         <div>
            

            {/* 正在热映的电影 */}
            <div className="hotmovie">
            <h2>{this.state.title}</h2>
            <ul>
            {
                        this.state.hotmovies.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={"/Detail/" + item.id}>
                                        <div className="pic">
                                            <img src={item.images.large} alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                {item.title}
                                            </div>
                                            <div className="genres">
                                            {item.genres}
                                            </div>
                                            <div className="rating">
                                            <span>评分：{item.rating.average}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
            </ul>
            </div>
         </div>
     )
 }
}
export default Home;