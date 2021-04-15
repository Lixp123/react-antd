import * as React from 'react';
import { connect } from 'react-redux';
import {componentPropsInterface, componentStateInterface} from '../containerInterface';
// @connect((state:any) => { return  {state}  })
class Login extends React.PureComponent<componentPropsInterface, componentStateInterface>{
  constructor(props:any) {
    super(props);
    this.state={
      myState:10
    }
  }
  
  routerLoad= () => {
    return <div onClick={()=>{
      this.props.history.push({pathname: '/login/login/context', state: {}})
    }}>登录66</div>
  }

  setDate = ()=>{
    alert(this.state.myState)
  }

  _loginInfo = () => {
    
  }

  componentDidMount(){

  }

  render() {
       return <div>{this.routerLoad()}<input /></div>
  }
}
export default connect((state) => { return  {state}  })(Login)