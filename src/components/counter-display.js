import React,{useContext} from 'react';
import {Statistic} from 'semantic-ui-react';
import {CounterContext} from '../store/counter-context';

const CounterDisplay =()=>{
    const [count] = useContext(CounterContext);
    return (
        <Statistic>
            <Statistic.Value>{count}</Statistic.Value>
            <Statistic.Label></Statistic.Label>
        </Statistic>
    )
};
export default CounterDisplay;