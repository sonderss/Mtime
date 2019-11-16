import React,{Component} from 'react'
import {getIsReady} from '../serve/api'
import Link from 'umi/Link'
import router from 'umi/router';
import {Icon,Badge} from 'antd-mobile'
class Nextplay extends Component {
    state={
        data:[],
        nowplay_count:''
    }
    componentDidMount(){
        getIsReady().then(res=>{
           
            var list = []
            for(let i=0;i<6;i++){
            list.push(res.data.moviecomings[i])
            }
            this.setState({
            data:list,
            nowplay_count:res.data.moviecomings.length
            })
        })
    }
    toMore(){
    
       router.push('/movies?id=1')
  
    }
    render(){
        return (
            <div>
           
           
            <div className={'nowPlay'}>
             <div style={{display:'flex',alignItems: 'center'}}>
               <p >即将上映</p>
               <p style={{marginLeft:'10px',marginTop:'15px'}}>{this.state.nowplay_count?this.state.nowplay_count:''}</p>
               <p >部</p>
               </div>
              
              <div style={{marginTop:'5px',display:'flex',alignItems: 'center'}}>
              <p style={{color:'#ccc'}} onClick={()=>this.toMore()}>查看更多</p>
              <Icon type="right" size='md' onClick={()=>this.toMore()}/>
              </div>
            </div>
            
            <ul className={'ul_list'}>

                {this.state.data.map((item,index)=>{

                  return <Link  to={{pathname:'/detail',search:`movieId=${item.id}`}} key={index}>
                         <li  >
                          <Badge text={parseInt(item.r)>0?item.r:''}  style={{  position: 'absolute' ,top:'-198px',left:'97px', padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
                          <img style={{width:'120px',height:'200px'}} src={item.image} alt={item.id} />
                        
                          <p style={{color:'#000'}}>{item.title}</p>
                        </li>
                        </Link>
                })}
            </ul>
              
         </div>
        )
    }
       
   
}

export default Nextplay