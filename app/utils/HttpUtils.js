import {
    API_KEY,
    API_ROOT,
    API_IN_THEATERS,
    API_TOP_250,
    API_US_BOX,
    API_SEARCH_BY_KEYWORDS,
    API_MOVIE_INFO,
    API_MOVIE_PHOTO,
    API_MOVIE_CELEBRITY,
} from '../redux/constants/Config';

export function fetchGetData(url,callBack){
    let base=API_ROOT+url;
    console.log(base);
    fetch(encodeURI(base))
        .then((response)=>response.json())
        .then((responseJson)=>{
        console.log("responseJson:"+responseJson);
        callBack(responseJson);
    }).catch((error)=>{
        console.log("error:"+error);
    });
}

export function fetchinThreadMovie(callBack){
    fetchGetData(API_IN_THEATERS,callBack);
}

export function fetchTop250(callBack) {
    fetchGetData(API_TOP_250,callBack);
}

export function comingMovie(callBack) {
    fetchGetData(API_US_BOX,callBack);
}

export function fetchMovieReview(movieId,start,callBack){
    fetchGetData(API_MOVIE_INFO+movieId+"/reviews?apikey="+API_KEY+"&start="+start+"&count=20",callBack);
}

export function fetchMovieComment(movieId,start,callBack) {
    fetchGetData(API_MOVIE_INFO+movieId+"/comments?apikey="+API_KEY+"&start="+start+"&count=20",callBack);
}



