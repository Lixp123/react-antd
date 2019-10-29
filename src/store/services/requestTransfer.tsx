import * as qs from 'qs';

export function createFormDataPostRequest(params:any) {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        credentials: 'include',
        body: qs.stringify(params),
    }
}

export function createGetRequest(params = {}) {
    return {
        method: 'get',
        credentials: 'include',
    }
}

export function transferParamsToGetRequest(url:any, params = {}) {
    if (qs.stringify(params)) {
        return `${url}?${qs.stringify(params)}`;
    }
    return url;
}

export function createRestfulGetRequest(url:any, params:any = {}) {
    let key = Object.keys(params)[0];
    let param = params[key];
    return `${url}/${param}`;
}

export function createDeleteRequest() {
    return {
        method: 'DELETE',
        credentials: 'include',
    }
}

export function createPutRequest(params:any) {
    return {
        method: 'put',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        credentials: 'include',
        body: qs.stringify(params),
    }
}

export function createRestfulDeleteRequest(url:any, params:any = {}) {
    let key = Object.keys(params)[0];
    let param = params[key];
    return `${url}/${param}`;
}
