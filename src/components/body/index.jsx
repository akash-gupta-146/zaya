import React, { Component } from 'react';
import * as style from './style.module.scss'
import { connect } from 'react-redux';


class Body extends Component{

    render(){
        return<>
            <div className={style.card}>
                i am Body
                {this.props.age}
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return { age: state.age }
}

export default connect(mapStateToProps)(Body)