import * as actionTypes from './actions/actions';


const initialState = {
    results:[]
}

const resultReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results:state.results.concat(action.value)
            }
        case actionTypes.DELETE_RESULTS:
            let newResults=state.results;
            newResults=newResults.filter((result,index)=>index!=action.value);
            return {
                ...state,
                results:newResults
            }
        default:
            return state;
    }
    return state;
};

export default resultReducer;



