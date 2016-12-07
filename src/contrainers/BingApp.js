/**
 * Created by SP on 2016/12/6.
 */
import React, { Component, PropTypes } from 'react'
import ImgMsg from '../components/ImgMsg'
import MainImg from '../components/MainImg'
import { connect } from 'react-redux'
import { onImgClick } from '../actions'

class BingApp extends Component{
    render(){
        const { isShow,onImgClick } = this.props;
        return(
            <div>
                <MainImg onImgClick={onImgClick}/>
                <ImgMsg isShow={isShow}/>
            </div>
        )
    }
}
BingApp.propTypes = {
    isShow:PropTypes.bool.isRequired,
    onImgClick:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isShow:state.isShow,
});

export default connect(mapStateToProps,{
    onImgClick
})(BingApp);

