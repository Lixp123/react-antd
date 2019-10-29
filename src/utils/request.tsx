import { message, Modal, Icon } from 'antd';

import * as Rx from 'rxjs';

import axios from 'axios'


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */


function processResponse(res:any) {
  if (res.response) {
    return { data: res.response };
  }
  return null;
}

export default function request(url:any, options = { method: 'GET', credentials: 'include', } as any, isCheck = true):any {
  return new Promise(function(resolve) {
    axios({
      url: url,
      method: options.method,
	    withCredentials: true,
	    data: options.body,
	    crossDomain: true,
	    xsrfHeaderName: 'Cookie',
	    xsrfCookieName: 'session'
    } as any).then(res=>{
      if (res.request) {
        if(res.data){
      resolve(res.data)
        }else{
      resolve(res.data)
    }
      }
      resolve(null) ;
    }).catch(res=>{
      
    })
  })
}