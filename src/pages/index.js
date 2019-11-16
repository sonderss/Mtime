// import styles from './index.css';
import React, {Component} from 'react'

import { NavBar, Icon } from 'antd-mobile';
import Nowplay from '../components/nowPlay'
import Nextplay from '../components/nextPlay'
class Index extends Component {
  componentWillMount(){
    console.log(123)
   
  }
  
 render(){
  return (
    <div>
   
    <Nowplay></Nowplay>
    <Nextplay></Nextplay>
  </div>
  )
 }
 
  
}
export default Index
