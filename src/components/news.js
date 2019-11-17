import React, {Component} from 'react'
import {news} from '../serve/api'
import { min } from 'moment'
class News extends Component {
    state = {
        data:[],
        time:[],
        times:[]
        
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
           
            var op = []
            // eslint-disable-next-line array-callback-return
            this.state.time.forEach((item,index)=>{
                // eslint-disable-next-line eqeqeq
                
                if(parseInt(item)<=1){
                //    console.log('刚刚')
                op.push('刚刚')
                 
                //   op+=s
                }
                if(1<parseInt(item) && parseInt(item)<60){
                   
                    // console.log(item+'分钟')
                    op.push(item+'分钟前')
                //    op+=m
                }
                if(parseInt(item)>=60 && Math.floor(item/60)<24){
                    // console.log(Math.floor(item/60) +'小时')
                    op.push(Math.floor(item/60) +'小时前')
                //    op+=h
                }
                if(Math.floor(item/60)>=24){
                    op.push(Math.floor(item/60/24)+'天前')
                    // op+=d
                }
                if(Math.floor(item/60/24)>30 && Math.floor(item/60/24/30) <12){
                    op.push(Math.floor(item/60/24/30) + '月前')
                    // op+=month
                }
                if(Math.floor(item/60/24/30) >=12 ){
                    op.push(Math.floor(item/60/24/30/12)+'年前')
                    //    op+= year
                }
                // console.log(op)
                this.setState({
                    times:op
                })
                
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
                    return  <div className={item.images.length === 1 ?'new_sigle':''  } key={index}>
                                <div className={'news_view'} onClick={()=>this.newDetail(item.relatedId)}>
                                  {/* <view style={{width:'200px',backgroundImage:`url(${item.images[0].imgUrl})`,backgroundSize: 'contain',  backgroundRepeat: 'no-repeat'}}> */}
                                  <img style={{width:'150px',height:'100%'}} src={item.images[0].imgUrl} />
                                  {/* </view> */}
                                   
                                    <div style={{display:'flex',flexDirection: 'column'}}>
                                         <h2 style={{margin:'0',textAlign: 'start',padding:'0 10px'}}>{item.title}</h2>
                                            <span style={{width:'100%',textAlign: 'start',padding:'20px 10px',color:'#ccc'}}>
                                            {this.state.times[index]}
                                            </span>
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