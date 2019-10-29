import * as React from 'react';
import { connect } from 'react-redux';
import{ Router, Route, Switch, Redirect }  from 'react-router-dom';
import * as HistoryCreator from 'history';
import { History } from 'history';
import {componentPropsInterface, componentStateInterface} from '../containerInterface';

class LoginPage extends React.PureComponent<componentPropsInterface, componentStateInterface>{
  constructor(props:any) {
    super(props);
  }
  routerLoad(){
    return <div>登录</div>
  }

  componentDidMount(){
    const { dispatch} = this.props
    dispatch({type:'app/getUserInfoObj',payload:'999'})
  }

  render():any {
       return this.routerLoad()
  }
}

export default connect((state) => { return  {state}  })(LoginPage)