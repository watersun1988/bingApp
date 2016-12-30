/**
 * Created by SP on 2016/12/7.
 */

export const USER_IMG_CLICK = 'USER_CLICK';
export const USER_SIMPLEIMG_CLICK = 'USER_SIMPLEIMG_CLICK';
export const APP_LOAD_IMAGE = 'APP_LOAD_IMAGE';

export const onImgClick = () => ({
    type:USER_IMG_CLICK
});

export const onSimpleImgClick = (url) => ({
    type:USER_SIMPLEIMG_CLICK,
    value:url
});

export const receiveImgEvt = (json) => ({
    type:APP_LOAD_IMAGE,
    value:json.url
})

export const loadImage = () => (dispatch) => {
    return fetch('/mainImage')
        .then(response => response.json())
        .then(json => dispatch(receiveImgEvt(json)));
}
