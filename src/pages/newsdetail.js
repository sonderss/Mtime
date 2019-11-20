import React,{Component} from 'react'
import { parse } from 'qs';
import {newsdetail} from '../serve/api'
import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

class NewsDetail extends Component{
    componentDidMount(){
        const queryData = parse(this.props.location.search, {
            ignoreQueryPrefix: true, // 忽略掉?
        }); 
       
        newsdetail(queryData.newsId).then(res=>{
            console.log(res.data)
        })
    }
    render(){
        return(
            <div>新闻心情</div>
        )
    }
}
export default NewsDetail