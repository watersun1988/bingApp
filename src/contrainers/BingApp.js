/**
 * Created by SP on 2016/12/6.
 */
import React, { Component, PropTypes } from 'react'
import ImgMsg from '../components/ImgMsg'
import MainImg from '../components/MainImg'

export default class BingApp extends Component{
    render(){
        return(
            <div>
                <MainImg/>
                <ImgMsg/>
            </div>
        )
    }
}