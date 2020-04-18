export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADD_FIVE='ADD_FIVE';
export const SUBTRACT_FIVE='SUBTRACT_FIVE';
export const STORE_RESULTS='STORE_RESULTS';
export const DELETE_RESULTS='DELETE_RESULTS';



//1st actionCreator
export const increment=()=>{
    return {
        type:INCREMENT
    }
}


export const decrement=()=>{
    return {
        type:DECREMENT
    }
}

export const add_five=(value)=>{
    return {
        type:ADD_FIVE,
        value:value
    }
}


export const subtract_five=(value)=>{
    return {
        type:SUBTRACT_FIVE,
        value:value
    }
}


export const store_results=(res)=>{
    return (dispatch,getState)=>{
        const oldCounter=getState().ctrRd.counter;
        console.log(oldCounter);
        setTimeout(()=>{
            dispatch({type:STORE_RESULTS,value:res})
        },2000)
    }
}


export const delete_result=(index)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch({type:DELETE_RESULTS,value:index})
        },3000)
    }
}
