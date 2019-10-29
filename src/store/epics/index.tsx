import {combineEpics} from 'redux-observable';
import 'rxjs'; 
import * as login from './loginPageEpic';

function distructor(obj:any) {
  return Object.keys(obj).map((item, index) => {
    return obj[item];
  })
}

const rootEpic = combineEpics(
  ...distructor(login),
);

export default rootEpic;
