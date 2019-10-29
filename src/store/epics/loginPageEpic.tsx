import { of } from 'rxjs';
import 'rxjs';
import { Action } from '../reducer/reducerInterface';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { loginPageAPI } from  '../services'
export function getUserInfoObj(action$:any, store: any) {
  return action$.pipe(ofType('app/getUserInfoObj'),
    mergeMap((action:Action):any=>{
        return of({type:'app/appPageReducer',payload:action.payload})       
    })
  )   
}