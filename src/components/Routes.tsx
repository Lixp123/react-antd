import React from 'react';
import{  Route }  from 'react-router-dom';

interface RoutesProps {
  component:any,
  path:any,
  [random:string]:any
}

interface RoutesState {
  [random: string]: any;
}
export default class Routes extends React.PureComponent<RoutesProps,RoutesState>{
  constructor(props:any) {
    super(props);
    this.state={
      isShow:true
    }
  }

  getSnapshotBeforeUpdate() {
    if(this.props.path === window.location.pathname){
      let myClass =  this.props.component.WrappedComponent
      let fun = new myClass(React)
      fun && fun.returnQuery && fun.activated()
      this.setState({isShow:true})
    }else{
      this.setState({isShow:false})
    }
  }

  render(){
       return <div style={{display:this.state.isShow?'block':'none'}}>
         <Route {...this.props} />
       </div>
  }
}