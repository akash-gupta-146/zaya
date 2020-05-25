import React, { Component } from 'react';
import * as style from './style.module.scss'
import { connect } from 'react-redux';
import Menu from './../menu/menu'
import Thumbnails from '../videoThumbnails';
class Body extends Component{

    render(){
        return<>
            <div className={`${style.card} flex`}>
                <Menu />
                <div className={style.videoPlayer}>
                { this.props.activeVideo?.html && <div dangerouslySetInnerHTML={{__html: this.props.activeVideo.html}}/> }
                </div>
                <div className={style.thumbnails}>
                    <Thumbnails />
                </div>
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        activeVideo : state.activeVideo
    }
}
const mapDispachToProps = dispach => {
    return {
        play : () => dispach({type:'Iamakash'})
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Body)