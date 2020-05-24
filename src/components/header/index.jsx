import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AGE_UP, AGE_DOWN } from './../../redux/action-types';
import * as style from './style.module.scss'

class Header extends Component{

    render(){
        return<>
            <div className={`flex justify-between align-center ${style.header}`}>
                <img height="70" src="https://getdrawings.com/free-icon/boy-icon-png-55.png" className={style.logo} alt="lgo"/>
                <div className={style.content}>
    <h1 className={style.appTitile}>The dhoom machale song {this.props.age}</h1>
                    <div className={`flex justify-center align-center ${style.lessons}`}>
                        <div className={style.text}>Lessons</div>
                        <div className={style.lessonSelectors}>
                            <span className={`${style.lessonNo}`}>1</span>
                            <span className={style.lessonNo}>2</span>
                            <span className={style.lessonNo}>3</span>
                            <span className={style.lessonNo}>4</span>
                            <span className={style.lessonNo}>5</span>
                        </div>
                    </div>
                </div>
                <div className={style.rightSection}>
                    <div className={style.lessonType}>
                        Keyboard
                    </div>
                    <button className={style.exit} onClick={this.props.ageUp}>Clear Session</button>
                </div>
            </div>
        </>
    }
}


const mapStateToProps = state => {
    return{
        age: state.age
    }
}

const mapDispachToProps = dispach => {
    return{
        ageUp:  ()=> dispach({type:AGE_UP}),
        ageDown: () => dispach({type:AGE_DOWN})
    }
}


export default connect(mapStateToProps,mapDispachToProps)(Header);