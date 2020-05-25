import React from 'react';
import * as style from './style.module.scss'
import { SET_ACTIVE_OBJECT } from './../../redux/action-types'
import { connect } from 'react-redux';

class Menu extends React.Component{

    componentDidUpdate(){
        console.log('MENU',this.props)
    }

    render(){
        const { courseDetails,activeLesson } = this.props
        return(
            <div className={`${style.menu}`}>
                <h3>MENU</h3>
            {
                courseDetails &&
                <div>
                    <h4> { courseDetails[activeLesson].lessonTitle } { this.props.activeObjective}</h4>
                    {
                        courseDetails[activeLesson].objectiveDetails.map((obj,index)=>{
                            return <div 
                                className={`${style.card}`} 
                                key={obj.id}
                                onClick = { () => {this.props.setObjective(index)} }
                                >
                                <h5>{ obj.title }</h5>
                                <div className={`flex justify-center`}>
                                    <div className={`${style.count}`}>
                                        0 / {obj.objectiveVideosDetails.length}
                                    </div>
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
        activeObjective: state.activeObjective
    }
}

const mapDispachToProps = dispach =>{
    return {
        setObjective: (objective) => dispach({type:SET_ACTIVE_OBJECT,objective:objective})
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Menu)