import React, {Component} from 'react'
import { parse } from 'qs'
class Movies extends React.Component {
    componentDidMount(){
        const queryData = parse(this.props.location.search, {
            ignoreQueryPrefix: true, // 忽略掉?
        }); 
        console.log(queryData.movieId)
    }
        render(){
            return(
                <div>
                    详情
                </div>
            )
        }
}
export default Movies