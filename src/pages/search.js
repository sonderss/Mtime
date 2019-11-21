import React, {Component} from 'react'
import {searchMovie} from '../serve/api'
class Search extends Component{

    onChange(e){
        console.log(e)
        searchMovie(e).then(res=>{
            console.log(res.data)
        })
    }
    render(h) {
        return(
           <div>
                <div className={'top'}>
                    <img style={{width:'80px',height:'80px',marginLeft:'15px'}} src={require('../assets/changan.jpg')} />
                    <p style={{marginLeft:'15px'}}>长安酒馆电影室</p>
                </div>
                <div className={'search'}>
                    <input type='text' onChange={(e)=>this.onChange(e.target.value)} placeholder='影院/影人/影片 随手掌握' />
                </div>
                
           </div>
        )
    }
}
   


export default Search