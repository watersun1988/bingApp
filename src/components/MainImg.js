/**
 * Created by SP on 2016/12/2.
 */
import React,{Component,PropTypes} from 'react';

export default class MainImg extends Component{
    /*static propTypes = {
        imgUrl:PropsTypes.string.isRequired
    }
    static defaultProps = {
        imgUrl:'./img/NottulnHerbst_ZH-CN9638949027_1920x1080.jpg'
    }*/
    constructor(props){
        super(props);
        this.state = {
            imgHeight:screen.availHeight,
            imgWidth:screen.availWidth
        };
    }

    drawImage(props){
        const {imgUrl} = props;
        console.log('img url:'+imgUrl);
        const {imgCanvas} = this.refs;
        let context = imgCanvas.getContext('2d');
        let img = new Image();
        img.onload = () => {
            this.setState({
                imgHeight:img.height,
                imgWidth:img.width
            });
            console.log('img width:'+img.width+' height:'+img.height);
            console.log('canvas width:'+imgCanvas.width+' height:'+imgCanvas.height);
            context.clearRect(0,0,img.width,img.height);
            context.drawImage(img,0,0,img.width,img.height);
            //context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height);
        }
        img.src = imgUrl;
    }

    componentWillMount(){

    }
    componentWillReceiveProps(newProps){
        this.drawImage(newProps);
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.drawImage(this.props);
    }
    render(){
        let style = {
            margin:'0',
            padding:'0',
            display:'block'
        };
        return (
            <div>
                <canvas ref='imgCanvas' height={this.state.imgHeight} width={this.state.imgWidth} style={style}/>
            </div>)
    }
}

MainImg.propTypes = {
    imgUrl:PropTypes.string.isRequired
}
MainImg.defaultProps = {
    imgUrl:'./img/NottulnHerbst_ZH-CN9638949027_1920x1080.jpg'
}