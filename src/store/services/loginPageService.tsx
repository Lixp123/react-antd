import { request, hostName } from '../../utils';

import { createFormDataPostRequest } from './requestTransfer';

// 用户登录
export function userLogin(params:any) {
    return request(hostName + '/user/auth/login', createFormDataPostRequest(params),false);
}

// 用户退出登录
export function logout() {
    return request(hostName + '/user/auth/logout');
  }