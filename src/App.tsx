import * as React from 'react';
import{ Router, Route, Switch }  from 'react-router-dom';
import * as HistoryCreator from 'history';
import * as reactRedux from 'react-redux';
import './App.css';
import {AppPage,LoginPage }   from './routes/index';

export const history = (HistoryCreator as any).createBrowserHistory();
let { Provider } = reactRedux;
interface AppIsRequireProps {
  store?: any
}

export default class App extends React.PureComponent<AppIsRequireProps, { [random: string]: any }>{
  constructor(props:any) {
    super(props);
  }
  routerLoad(){
    return <div>
            <Switch>
              <Route path="/app" component={AppPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
        </div>
      
  }
  componentDidMount(){
    this.props.store.dispatch({type:'app/getUserInfoObj',payload:'99889'})
  }
  render():any {
       return <Provider store={this.props.store}>
        <Router history={history}>
        {this.routerLoad()}
      </Router >
     </Provider>
  }
}
