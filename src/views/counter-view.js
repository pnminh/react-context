import React from 'react';
import {Segment} from 'semantic-ui-react';
import CounterButton from '../components/counter-button';
import CounterDisplay from '../components/counter-display';
import {CounterContextProvider} from '../store/counter-context';

const CounterView = () =>{
    return (
        <CounterContextProvider>
            <h3>Counter</h3>
            <Segment textAlign="center">
                <CounterDisplay/>
                <CounterButton/>
            </Segment>
        </CounterContextProvider>
    )
}
export default CounterView;