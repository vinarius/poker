import React, { createContext, useReducer } from 'react';
import myReducer from './myReducer';
import stateActions from './stateActions';

export const MyContext = createContext();

export const StateProvider = (props) => {

    const defaultState = {};

    const [state, dispatch] = useReducer(myReducer, defaultState);

    const providerValue = {};

    return (
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
};