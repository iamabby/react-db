import React,{Component} from  "react";
import axios from "axios";
import "./Detail.less";


class Detail extends Component{
  constructor(props) {
    super();
    this.state = {
        title: "",
        summary: "",
        imgUrl: "",
        casts: [],
        rating:[],
        ratings_count:"",


    }
}
componentDidMount() {
    console.warn('ok')
    axios.get("/v2/movie/subject/" + this.props.match.params.id)
        .then((response) => {
            console.log(response.data);
            this.setState({
                title: response.data.title,
                summary: response.data.summary,
                imgUrl: response.data.images.large,
                casts: response.data.casts,
                rating:response.data.rating,
                ratings_count:response.data.ratings_count,

            })
        })
        .then((error) => {
            console.log(error);
        })
}
  render(){
    const {
      title,
      summary,
      imgUrl,
      casts,
      rating,
      ratings_count,
  } = this.state;
      return(
  <div className="datail">
    <div className="title">{title}</div>
    <div className="rating_block">评分：<span className="rating">{rating.average}</span> 评论次数：<span  className="ratings_count">{ratings_count}</span></div>
    <img src={imgUrl} alt="" />
    <div className="summary">{summary}</div>
  </div>
      )
  }
}
export default Detail;