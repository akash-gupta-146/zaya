import React from 'react'
import { connect } from 'react-redux'
import { SET_ACTIVE_VIDEO } from './../../redux/action-types'
import * as style from './style.module.scss'

class Thumbnails extends React.Component{


     componentDidMount(){
        // const { activeLesson, activeObjective } =  this.props



        // setTimeout(()=>{
        //     this.props.courseDetails[activeLesson].objectiveDetails[activeObjective].objectiveVideosDetails.map((video,index)=>{
        //         console.log(video.url)
        //         fetch(`https://vimeo.com/api/oembed.json?url=${video.url}`)
        //         .then(res => res.json())
        //         .then(res => {
        //             var vd = this.state.videDetails;
        //             vd.push(res)
        //             this.setState({videDetails:vd})
        //         })
        //         return 10;
        //     })
        // },500)

    }

    componentDidUpdate(){
        console.log("Thumbnail",this.props)
    }

renderList=()=>{

}
    render(){
        return<div className={`flex ${style.thumbnails}`}>
            { this.props.videoCount}
            <div className={style.thumbnail}>
                {
                            this.props.videos.map((video,index)=>{
                                console.log(video,'iiiii aaammmmm in    thtutntmmbanasl')
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