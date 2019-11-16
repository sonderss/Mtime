// import styles from './index.css';
import React, {Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Nowplay from '../components/nowPlay'
import Nextplay from '../components/nextPlay'
import News from '../components/news'
class Index extends Component {
  componentWillMount(){
   
   
  }
  
 render(){
  return (
    <div>
   
    <Nowplay></Nowplay>
    <Nextplay></Nextplay>
    <News></News>
  </div>
  )
 }
 
  
}
export default Index
