import React from 'react'
import { connect } from 'react-redux'
import { SET_ACTIVE_VIDEO } from './../../redux/action-types'
import * as style from './style.module.scss'

class Thumbnails extends React.Component{


    render(){
        return<div className={`flex ${style.thumbnails}`}>
            { this.props.videoCount}
            <div className={style.thumbnail}>
                {
                            this.props.videos.map((video,index)=>{
                                return <div key={`thumbnail${index}`} className={`flex`}> 
                                        <div className={style.vimeo} onClick={()=>{this.props.activeVideo(video)}}>
                                            <img src={video.thumbnail_url_with_play_button} alt="video thumbnail"/> 
                                        </div>
                                </div>
                    
                            })
                }
                {
                            this.props.activeVideo(this.props.videos[0])
                }
            </div>
        </div>
    }
}

const mapStateToProps =  state =>{
    return {
        videos: state.videos,
        videoCount : state.videoCount
    }
}

const mapDispachToProps = dispach => {
    return {
        activeVideo : ( videoDetails ) => { dispach({type:SET_ACTIVE_VIDEO,videoDetails:videoDetails}) }
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Thumbnails)