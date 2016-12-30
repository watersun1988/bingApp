/**
 * Created by SP on 2016/12/7.
 */
const entities = (state,action) =>{
    let mainUrl;
    console.log('action type:'+action.type);
    switch (action.type){
        case 'USER_CLICK':
            return {
                ...state,
                isShow:!(state.isShow)
            };
        case 'USER_SIMPLEIMG_CLICK':
            //console.log('action url:'+action.value);
            mainUrl = action.value.replace('192x108','1920x1080');
            return {
                ...state,
                mainUrl:mainUrl
            };
        case 'APP_LOAD_IMAGE':
            console.log('APP_LOAD_IMAGE url:'+action.value);
            mainUrl = action.value;
            return {
                ...state,
                mainUrl:mainUrl
            };
        default:
            return state;
    }
}

export default entities;