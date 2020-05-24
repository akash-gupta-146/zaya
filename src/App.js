import React from 'react';
import Header from './components/header'
import Body from './components/body'
import { SET_COURSE } from './redux/action-types'


import './App.scss';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
      fetch('/db/data.json')
      .then(res => res.json())
      .then( data => this.props.setCourse(data))
  }

  render(){
    return (
      <div className="App">
          <Header />
          <Body />
      </div>
    );
  }  
}

export var lessons;



const mapStateToProps = state => {
  return {
    course: state.course
  }
}

const mapDispachToProps = dispach =>{
  return {
    setCourse: (course) => dispach( {type:SET_COURSE,course} )
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App)