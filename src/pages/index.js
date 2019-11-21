// import styles from './index.css';
import React, {Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Nowplay from '../components/nowPlay'
import Nextplay from '../components/nextPlay'
import News from '../components/news'
import styles from '../layouts/index.css'
class Index extends Component {
  componentWillMount(){
   
   
  }
  
 render(){
  return (
    <div>
     
    <Nowplay></Nowplay>
    <Nextplay></Nextplay>
    <News></News>
     <p className={styles.op}>没有更多了~</p>
      <div className={styles.btm_layout}>
        
        <div style={{marginTop:'0.5rem',padding:'0',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{width:'1rem'}}>
              <img style={{width:'100%',marginTop:'0.15rem'}} src={require('../assets/banquan.png')} />
            
          </div>
          <p>长安酒馆电影室</p>
        </div>
        <div style={{margin:'0',padding:'0'}}>
         <p>特别感谢MTime时光网，此电影室不做任何商业用途</p>
        </div>
        
      </div>
 
  </div>
  )
 }
 
  
}
export default Index
