/**
 * Created by SP on 2016/12/6.
 */
import React, { Component, PropTypes } from 'react'
import ImgMsg from '../components/ImgMsg'
import MainImg from '../components/MainImg'
import { connect } from 'react-redux'
import { onImgClick,onSimpleImgClick,loadImage } from '../actions'
import MenuBar from '../components/MenuBar'


class BingApp extends Component{
    static propTypes = {
        isShow:PropTypes.bool.isRequired,
        onImgClick:PropTypes.func.isRequired,
        onSimpleImgClick:PropTypes.func.isRequired,
        mainUrl:PropTypes.string.isRequired,
        loadImage:PropTypes.func.isRequired
    }
    componentDidMount(){
        const {loadImage} = this.props;
        loadImage();
    }
    render(){
        const { isShow,onImgClick,onSimpleImgClick,mainUrl} = this.props;
        return(
            <div>
                <MenuBar isShow={isShow} onSimpleImgClick={onSimpleImgClick}/>
                <MainImg imgUrl={mainUrl} onImgClick={onImgClick}/>
                <ImgMsg isShow={isShow}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isShow:state.isShow,
    mainUrl:state.mainUrl
});

export default connect(mapStateToProps,{
    onImgClick,
    onSimpleImgClick,
    loadImage
})(BingApp);

