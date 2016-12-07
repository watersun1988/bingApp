/**
 * Created by SP on 2016/12/7.
 */
const entities = (state,action) =>{
    console.log('action type:'+action.type);
    switch (action.type){
        case 'USER_CLICK':
            return {
                isShow:!(state.isShow)
            };
        default:
            return state;
    }
}

export default entities;