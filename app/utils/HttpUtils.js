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
    fetch(encodeURI(base))
        .then((response)=>response.json())
        .then((responseJson)=>{
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


