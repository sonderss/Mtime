import React, {Component} from 'react'
import {news} from '../serve/api'
import Link from 'umi/Link'

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
                if(Math.floor(item/60)>=24 && Math.floor(item/60/24) < 30){
                    op.push(Math.floor(item/60/24)+'天前')
                    // op+=d
                }
                if(Math.floor(item/60/24)>=30 && Math.floor(item/60/24/30) <12){
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
                    <div style={{width:'95%',display:'flex',alignItems: 'center'}}>
                    <p >今日热点</p>
                    </div>
                </div>
                {/**'new_sigle' */}

            
              
                {
                    this.state.data.map((item,index)=>{
                        return(
                            item.images.length ===1 ?
                   <Link to={{pathname:'/newsdetail',search:`newsId=${item.relatedId}`}} key={index}> 
                        <div className={'new_sigle'} >
                            <div className={'news_view'} >
                                {/* onClick={()=>this.newDetail(item.relatedId)} */}
                              <div style={{width:'100%',height:'150px',backgroundImage:`url(${item.images[0].imgUrl})`, backgroundSize: 'cover'}}>
                              {/* <img style={{width:'100%',height:'100%'}} src={require('')} /> */}
                              </div>
                               
                                <div style={{display:'flex',flexDirection: 'column',justifyContent: 'space-around'}}>
                                         <h3  style={{fontSize:'20px',fontWeight:550,margin:'0',textAlign: 'start',margin:'10px 0',color:'#000'}}>{item.title}</h3>
                                        <span style={{width:'100%',textAlign: 'start',color:'#ccc'}}>
                                        {this.state.times[index]}
                                        </span>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
            :
            <Link to={{pathname:'/newsdetail',search:`newsId=${item.relatedId}`}} key={index}> 
                <div className={'news_double' } >
                    <div className={'news_double_view'} onClick={()=>this.newDetail(item.relatedId)}>
                        
                            <h3 style={{textAlign:'start',fontSize:'20px',margin:'10px 0',color:'#000'}}>{item.title}</h3>
                        <div className={'img_view'} style={{margin:'10px 0 15px 0'}} >
                            {/* <div  style={{width:'100px',height:'100px',backgroundImage:'url('+require('../assets/2.jpg')+')',backgroundSize: 'cover'}}></div>
                            <div  style={{width:'100px',height:'100px',backgroundImage:'url('+require('../assets/2.jpg')+')',backgroundSize: 'cover'}}></div>
                            <div  style={{width:'100px',height:'100px',backgroundImage:'url('+require('../assets/2.jpg')+')',backgroundSize: 'cover'}}></div> */}
                            {
                                item.images.map((a,b)=>{
                                    // eslint-disable-next-line no-unused-expressions   width:'100%',height:'100%',objectFit:'cover'
                                return( <div style={{width:'9.5rem',height:'6.5rem'}} key={b} className={'imgs_biew'}>
                                        {/* <div  style={{width:'120px',height:'100px',backgroundImage:`url(${a.imgUrl})`,backgroundSize: 'cover',backgroundRepeat:' no-repeat', backgroundPosition:'center' }}></div> */}
                                        <img  style={{width:'100%',height:'100%',objectFit:'cover'}} src={a.imgUrl}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                        <span style={{textAlign:'start',display:'block',width:'100%',color:'#ccc'}}>
                            {this.state.times[index]}
                        </span>


                    </div>
                    
                </div>
            </Link>
                        )


                    })

              }
            </div>
        )
    }
}

export default News