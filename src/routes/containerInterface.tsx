
export interface componentPropsInterface {
    dispatch(action:{type:string,payload?:any}):void;
    state:any;
    [random: string]: any;
}

export interface componentStateInterface {
    [random: string]: any;
}
