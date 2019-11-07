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
  
  routerLoad(){
    return <div onClick={()=>{
      this.props.history.push('/login/login/context')
    }}>登录</div>
  }

  setDate = ()=>{
    alert(this.state.myState)
  }

  componentDidMount(){

  }

  render():any {
       return this.routerLoad()
  }
}
export default connect((state) => { return  {state}  })(Login)