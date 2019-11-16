import React, {Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { parse } from 'qs';
import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

class Movies extends  Component {
    
     state = {
        list: [],
        title:''
       
      }
      componentDidMount(){
        const queryData = parse(this.props.location.search, {
            ignoreQueryPrefix: true, // 忽略掉?
        }); 
        console.log(queryData.id)
        if(queryData.id == '0'){
                this.setState({
                    title:'正在热映'
                })
        }
        if(queryData.id == '1'){
            this.setState({
                title:'即将上映'
            })
    }
      }
      goBack(){
        history.goBack();
      }
   
        render(){
            return(
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.goBack()}
               
            >{this.state.title}</NavBar>
            )
        }
}
export default Movies