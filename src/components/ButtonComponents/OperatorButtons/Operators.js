import React from 'react';
//import any components needed
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = props => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map((operator, i) => {
        return (
          <OperatorButton
            key={i}
            char={operator.char}
            value={operator.value}
            handeClick={props.handleClick}
            handleEqual={props.handleEqual}
          />
        );
      })}
    </div>
  );
};

export default Operators;
