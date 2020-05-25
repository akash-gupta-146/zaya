import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SET_ACTIVE_LESSON } from './../../redux/action-types';
import * as style from './style.module.scss'

class Header extends Component{


    refresh(){
        if(window){
            window.location.reload()
        }
    }

    render= () => {
        const { course } = this.props;

        return<>
            <div className={`flex justify-between align-center ${style.header}`}>
                <img height="70" src="https://getdrawings.com/free-icon/boy-icon-png-55.png" className={style.logo} alt="lgo"/>
                <div className={style.content}>
                    <h1 className={style.appTitile}> { course?.recitalTitle }</h1>
                    <div className={`flex justify-center align-center ${style.lessons}`}>
                        <div className={style.text}>{ course?.instrumentTitle }</div>
                        <div className={style.lessonSelectors}>
                            {
                                course?.lessonDetails?.map((item,index)=>{
                                    let completed=true;
                                    item.objectiveDetails.forEach(obj => {
                                        if(!obj.done){
                                            completed = false;
                                        }
                                    });
                                return <span key={`lesson${index}`} 
                                            className={`${style.lessonNo} 
                                            ${this.props.activeLesson === index ? style.current : ''}
                                            ${ completed? '':style.orange}`} 
                                            onClick={()=>{this.props.setLesson(index)}}
                                            >
                                                {index+1}

                                        </span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.rightSection}>
                    <div className={style.lessonType}>
                        Keyboard 
                    </div>
                    <span className={style.exit} onClick={this.refresh}>Clear Session</span>
                </div>
            </div>
        </>
    }
}


const mapStateToProps = state => {
    return{
        course : state.course,
        activeLesson : state.activeLesson
    }
}

const mapDispachToProps = dispach => {
    return{
        setLesson: (active) => dispach({type: SET_ACTIVE_LESSON, active:active})
    }
}


export default connect(mapStateToProps,mapDispachToProps)(Header);