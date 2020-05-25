import React from 'react';
import * as style from './style.module.scss'
import { SET_ACTIVE_OBJECT,MARK_DONE,MARK_NOT_DOING,MARK_NEXT_CLASS } from './../../redux/action-types'
import { connect } from 'react-redux';

class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }


    callCard(index,call=1){
        this.props.setObjective(index)
        if(call)
        setTimeout(()=>{
            this.callCard(index,0)
        },1000)
    }

    rerender=()=>{
        this.setState({
            num: this.state.num+1
        })
    }

    render(){
        const { courseDetails,activeLesson } = this.props
        return(
            <div className={`${style.menu}`}>
                <h3>MENU</h3>
            {
                courseDetails &&
                <div>
                    <h4> { courseDetails[activeLesson].lessonTitle }</h4>
        
                    {
                        courseDetails[activeLesson].objectiveDetails.map((obj,index)=>{
                            return <div class={style.obj}>
                            <div 
                                className={`${style.card} 
                                ${this.props.activeObjective == index ? style.active :''}
                                ${obj.done ? style.done : ''}
                                ${obj.notDoing ? style.notDoing : ''}
                                ${obj.nextClass ? style.nextClass : ''}
                                `} 
                                key={obj.id}
                                onClick = { () => {this.callCard(index)} }
                                >
                                <h5>{ obj.title }</h5>
                                <div className={`flex justify-center`}>
                                    <div className={`${style.count}`}>
                                        0 / {obj.objectiveVideosDetails.length}
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.actions} justify-center flex`}>
                                        <span onClick={()=>{this.props.markDone(this.props.activeLesson,index);this.rerender()}}>✅</span>
                                        <span onClick={()=>{this.props.markNotDoing(this.props.activeLesson,index);this.rerender()}}>❌</span>
                                        <span onClick={()=>{this.props.markNextClass(this.props.activeLesson,index);this.rerender()}}>⏩</span>

                            </div>
                            </div>
                        })
                    }
                </div>
            }
            {
                !courseDetails && <span>Loading...</span>
            }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeLesson: state.activeLesson,
        courseDetails: state.course?.lessonDetails,
        activeObjective: state.activeObjective,
        lessonProgress : state.lessonProgress
    }
}

const mapDispachToProps = dispach =>{
    return {
        setObjective: (objective) => dispach({type:SET_ACTIVE_OBJECT,objective:objective}),
        markDone: (lesson,objective) => dispach({type:MARK_DONE,lesson:lesson,objective:objective}),
        markNotDoing: (lesson,objective) => dispach({type:MARK_NOT_DOING,lesson:lesson,objective:objective}),
        markNextClass: (lesson,objective) => dispach({type:MARK_NEXT_CLASS,lesson:lesson,objective:objective})

    }
}

export default connect(mapStateToProps,mapDispachToProps)(Menu)