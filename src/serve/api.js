import axios from 'axios'

//banner
export function getBanners(){

}
//正在售票(包括正在热映和即将上映)
export function getNowHot(){
    // return get('https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290')
  return  axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290'})
    
}
//正在热映
export function getNowPlay(){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290'})
}

//即将上映
export function getIsReady(){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290'})
}

//影片详情
export function getDetail(id){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId='+id})
}

//影片短评 https://api-m.mtime.cn/Showtime/HotMovieComments.api?pageIndex=1&movieId=217896
export function getMoviePinglun(page,id){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Showtime/HotMovieComments.api?pageIndex='+page+'&movieId='+id })
}

//精选影评  https://api-m.mtime.cn/Movie/HotLongComments.api?pageIndex=1&movieId=217896
export function getMovieJingxuan(page,id){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Movie/HotLongComments.api?pageIndex='+page+'&movieId='+id})
}
 
//预告片&拍摄花絮 https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId=217896

export function getMovieYuGaoPian(id){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId='+id})
}

//剧照 https://api-m.mtime.cn/Movie/ImageAll.api?movieId=?
export function getMovieJuZhao(id){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://api-m.mtime.cn/Movie/ImageAll.api?movieId='+id})
}

//搜索  https://m.mtime.cn/Service/callback.mi/Search/SearchSuggestionNew.api?keyword=keyword

export function searchMovie(keyword){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://m.mtime.cn/Service/callback.mi/Search/SearchSuggestionNew.api?keyword='+keyword})
}

//新网快讯

export function news(){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://content-api-m.mtime.cn/article/originalInfoList.api'})
}

//https://comm-api-m.mtime.cn/utility/share.api?type=116&relateId=10220119
//新闻详情
export function newsdetail(newsid){
    return axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{url:'https://comm-api-m.mtime.cn/utility/share.api?type=116&relateId='+newsid})
}

