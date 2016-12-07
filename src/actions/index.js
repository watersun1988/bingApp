/**
 * Created by SP on 2016/12/7.
 */

export const USER_IMG_CLICK = 'USER_CLICK';
export const USER_SIMPLEIMG_CLICK = 'USER_SIMPLEIMG_CLICK';

export const onImgClick = () => ({
    type:USER_IMG_CLICK
});

export const onSimpleImgClick = (url) => ({
    type:USER_SIMPLEIMG_CLICK,
    value:url
});