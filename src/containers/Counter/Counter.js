import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment,decrement,add_five,subtract_five,store_results,delete_result} from '../../store/actions/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtarctFiveCounter}  />
                <br />
                <button 
                style={{border:'None',borderRadius:'20px',color:'white',padding:'10px',background:'#4ea5fd'}}
                onClick={()=>this.props.onStoreResults(this.props.ctr)}
                >
                    Store Result
                </button>
                <ul>
                    {this.props.res.map((value,index)=>{
                        return <li onClick={()=>this.props.onDeleteResults(index)} key={index}>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrRd.counter,
        res:state.resRd.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter:()=>dispatch(decrement()),
        onAddFiveCounter:()=>dispatch(add_five(5)),
        onSubtarctFiveCounter:()=>dispatch(subtract_five(5)),
        onStoreResults:(res)=>dispatch(store_results(res)),
        onDeleteResults:(index)=>{console.log(index); dispatch(delete_result(index))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);