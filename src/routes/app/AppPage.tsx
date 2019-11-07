import * as React from 'react';
import{ Router, Route, Switch }  from 'react-router-dom';
import * as HistoryCreator from 'history';
import { History } from 'history';
export default class App extends React.PureComponent<{ [random: string]: any }, { [random: string]: any }>{
  constructor(props:any) {
    super(props);
  }
  routerLoad(){
    return <div>999</div>
  }
  render():any {
       return this.routerLoad()
    
  }
}
