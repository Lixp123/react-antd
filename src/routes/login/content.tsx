import * as React from 'react';
import { connect } from 'react-redux';
import{ Router, Route, Switch }  from 'react-router-dom';
import * as HistoryCreator from 'history';
import { History } from 'history';
import {componentPropsInterface, componentStateInterface} from '../containerInterface';
// @connect((state:any) => { return  {state}  })
class Content extends React.PureComponent<componentPropsInterface, componentStateInterface>{
  constructor(props:any) {
    super(props);
    this.state={
      myState:10
    }
  }
  
  routerLoad(){
    return <a onClick={()=>{
      this.props.history.push('/login/login')
    }}><div>内容444</div></a>
  }

  componentDidMount(){
    const { dispatch} = this.props
    dispatch({type:'app/getUserInfoObj',payload:'999'})
  }

  render():any {
       return this.routerLoad()
  }
}
export default connect((state) => { return  {state}  })(Content)