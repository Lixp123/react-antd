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
      isShow: true
    }
  }

  componentWillReceiveProps() {
    if ( window.location.pathname === this.props.path ) {
      let info = this.props.component.WrappedComponent
      let fun = new info(React)
      if (!this.state.isShow) {
        fun && fun.componentDidMount()
      }
      this.setState({isShow: true})
    }
    else if ( window.location.pathname.includes(this.props.path) ) {
      this.setState({isShow: false})
    }
  }

  render() {
    return <div style={{display: this.state.isShow?'block':'none'}}>
       <Route {...this.props}/>
    </div>
  }
}