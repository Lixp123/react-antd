import * as React from 'react';
import { connect } from 'react-redux';
import{  Route }  from 'react-router-dom';
import {componentPropsInterface, componentStateInterface} from '../containerInterface';
import  { Routes } from '../../components'
import { Login ,Content } from '../index'
// @connect((state:any) => { return  {state}  })
class LoginPage extends React.PureComponent<componentPropsInterface, componentStateInterface>{
  constructor(props:any) {
    super(props);
    this.state={
      myState:10
    }
  }
  
  componentDidMount(){
    const { dispatch} = this.props
    dispatch({type:'app/getUserInfoObj',payload:'999'})
  }

  render() {
       return <div>
            <Routes path="/login/login" component={Login} />
            <Route exact path="/login/login/:id" component={Content} />
            <Routes  path="/login/app" component={Content} />
          </div>
  }
}

export default connect((state) => { return  {state}  })(LoginPage)