import React, {Component} from 'react'
import {news} from '../serve/api'
import { min } from 'moment'
class News extends Component {
    state = {
        data:[],
        time:[]
        
    }
    componentDidMount(){
        var arr = []
        news().then(res=>{
            console.log(res.data.data.list) 
            //publishTime
               
            this.setState({
                data:res.data.data.list,
                
            })
            var now = new Date().getTime();   
           
            this.state.data.forEach((item,index)=>{
                
                 var ti = res.data.data.list[index].publishTime
                 
                 var y = parseInt(now/1000)
                 var a = y - ti 
                 var b =parseInt(Math.floor(a/60))
             
                arr.push(b)
                this.setState({
                    time:arr
                })
               
            })
            this.state.time.map((item,index)=>{
                if(parseInt(item) ==0){
                    console.log('刚刚')
                    this.state.time[index] = item+'刚刚'
                }
                if(0<parseInt(item)<=60){
                    console.log(item+'分钟')
                    this.state.time[index] = item+'分钟'
                }
                if(parseInt(item)>60){
                    console.log(item/60+'小时')
                    this.state.time[index] = item/60+'小时'
                }
            })
           
        })
      
       
    }
    newDetail(newId){
        console.log(newId)
    }
    render(){
        return (
           <div>
                
                <div className={'nowPlay'}>
                    <div style={{display:'flex',alignItems: 'center'}}>
                    <p >今日热点</p>
                    </div>
                </div>
                {/**'new_sigle' */}
            {
                this.state.data.map((item,index)=>{
                    return  <div className={item.images.length === 1 ?'new_sigle':'' } >
                                <div className={'news_view'} onClick={()=>this.newDetail(item.relatedId)}>
                                    <img style={{width:'140px',height:'120px'}} src={item.images[0].imgUrl}/>
                                    <div style={{display:'flex',flexDirection: 'column'}}>
                                         <h2 style={{margin:'0',textAlign: 'start',padding:'0 10px'}}>{item.title}</h2>
                                          <span style={{width:'100%',textAlign: 'start',padding:'20px 10px',color:'#ccc'}}>{this.state.time[index]}</span>
                                    </div>
                                    
                                </div>
                            </div>
                })
            }
               
            </div>
        )
    }
}

export default News