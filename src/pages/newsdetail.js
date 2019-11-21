import React,{Component} from 'react'
import { parse } from 'qs';
import {newsdetail} from '../serve/api'
import { NavBar, Icon } from 'antd-mobile';
import creatHistory from 'history/createHashHistory'  //返回上一页这段代码

const history = creatHistory();//返回上一页这段代码

class NewsDetail extends Component{
    state = {
        data:{},
        url:''
    }
    componentDidMount(){
        const queryData = parse(this.props.location.search, {
            ignoreQueryPrefix: true, // 忽略掉?
        }); 
        var that = this
        newsdetail(queryData.newsId).then(res=>{
            // console.log(res.data.data.email)
            // console.log(res.data.data.email.desc)
            // var src1 = res.data.data.email.desc
            // src1 = src1.split('http')
            // console.log(src1)
            that.setState({
                data:res.data.data.email,
                // url:src1
            })
           

        })
        // var a = document.createElement('script')
        // a.src = 'http'+ this.state.url[1]
        // document.appendChild(a)
        // document.removeChild(a)
    }
    goBack(){
        history.goBack()
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>this.goBack()}
                >新闻详情</NavBar>
                <h3>{this.state.data.title}</h3>
                <div style={{width:'100%',height:'300px'}}>
                <img src={ this.state.data.img} style={{width:'100%',height:'100%'}}/>
                </div>
                <p>{this.state.data.desc}</p>
               
                        
               
                
            </div>
        )
    }
}
export default NewsDetail