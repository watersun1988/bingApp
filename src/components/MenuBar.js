/**
 * Created by SP on 2016/12/7.
 */
import React,{Component,PropTypes} from 'react'

export default class MenuBar extends Component{
    onSimpleImg(e){
        const {onSimpleImgClick} = this.props;
        let element = e.target;
        onSimpleImgClick(element.src);
    }
    render(){
        const {isShow,imgList} = this.props;
        let listNodes = imgList.map((node,i) => {
            return(
                <li key={i} role="presentation">
                    <img src={node.url} onClick={this.onSimpleImg.bind(this)} role="menuitem"/>
                </li>
            )
        });
        let displayStyle = isShow ? 'block' : 'none';
        let style = {
            position:'fixed',
            top:'0px',
            display:displayStyle
        }
        return(
            <div className="dropdown" style={style}>
                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                    DropDown
                </button>
                <ul className="dropdown-menu" role="menu">
                    {listNodes}
                </ul>
            </div>
        )
    }
}
MenuBar.propTypes = {
    isShow:PropTypes.bool.isRequired,
    imgList:PropTypes.array.isRequired,
    onSimpleImgClick:PropTypes.func.isRequired
}

MenuBar.defaultProps = {
    imgList:[
        {
            url:'./img/NottulnHerbst_ZH-CN9638949027_192x108.jpg'
        },
        {
            url:'./img/IgelHerbst_ZH-CN7813320285_192x108.jpg'
        }
    ],
    isShow:true
}
