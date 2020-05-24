import React, { Component } from 'react';
import * as style from './style.module.scss'
import { connect } from 'react-redux';

class Body extends Component{

    componentDidMount(){
        // fetch('/db/data.json')
        // .then(res => res.json())
        // .then( data => console.log(data))
    }

    render(){
        return<>
            <div className={style.card}>
                i am Body
                {this.props.age}

                { console.log(this.props.course, 'ak')}
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return { age: state.age, course: state.course}
}

export default connect(mapStateToProps)(Body)