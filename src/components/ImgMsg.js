/**
 * Created by SP on 2016/12/6.
 */
import React,{Component,PropTypes} from 'react'

export default class ImgMsg extends Component{
    /*static propTypes = {
        imgTitle:PropsTypes.string.isRequired,
        imgInfo:PropsTypes.string.isRequired
    }
    static defaultProps = {
        imgTitle:'#2016-12-06# 【今日大雪】黄山风景区，安徽省 (© Adam Wong/Prime/500px)',
        imgInfo:'黄山雪霁初晴，一草一木，一山一石都裹上一层无暇的白，在阳光映射下，晶莹耀眼，宛如珊瑚盛开。虽然夏秋之际的黄山已经让人无法忘怀，但倘若你见过雪后的黄山，那你一定会中了这场白色的毒。山雪辉映，冰瀑冰挂，在山顶的云海中，如梦似幻。'
    }*/
    render(){
        const {imgTitle,imgInfo,isShow} = this.props;
        let displayStyle = isShow ? 'block' : 'none';
        let style = {
            position:'fixed',
            bottom:'0px',
            color:'white',
            display:displayStyle
        }
        return(
            <div style={style}>
                <h4>{imgTitle}</h4>
                <p>{imgInfo}</p>
            </div>
        )
    }
}
ImgMsg.propTypes = {
    imgTitle:PropTypes.string.isRequired,
    imgInfo:PropTypes.string.isRequired,
    isShow:PropTypes.bool.isRequired
}
ImgMsg.defaultProps = {
    imgTitle:'#2016-12-06# 【今日大雪】黄山风景区，安徽省 (© Adam Wong/Prime/500px)',
    imgInfo:'黄山雪霁初晴，一草一木，一山一石都裹上一层无暇的白，在阳光映射下，晶莹耀眼，宛如珊瑚盛开。虽然夏秋之际的黄山已经让人无法忘怀，但倘若你见过雪后的黄山，那你一定会中了这场白色的毒。山雪辉映，冰瀑冰挂，在山顶的云海中，如梦似幻。',
    isShow:true
}