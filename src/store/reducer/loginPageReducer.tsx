
import { hostName } from '../../utils';

import { Action } from './reducerInterface';

const initialStore = {
    hostName,
    //用户信息
    userInfo: '',
    // 
    loadVerificationCodeUrl: `${hostName}/user/auth/imgcode`,
};

export type storeType = typeof initialStore;

const namespace = 'app';

export default function appPageReducer(state: any = initialStore, action: Action) {
    try {
       
        switch (action.type) {
           
            // 退出登录
            case `${namespace}/appPageReducer`: {
                return Object.assign({}, state, {
                    userInfo: action.payload,
                })
            }

            // 刷新验证码
            case `${namespace}/refreshLoadVerificationCodeUrlReducer`: {
                return Object.assign({}, state, { loadVerificationCodeUrl: action.payload });
            }

            default:
                return state;
        }
    }
    catch (e) {
        return state;
    }
}