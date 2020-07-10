import React, { createContext, useReducer } from 'react';
import myReducer from './myReducer';
import stateActions from './stateActions';

export const MyContext = createContext();

export const StateProvider = (props) => {

    const defaultState = {
        tableSize: 'small'
    };

    const [state, dispatch] = useReducer(myReducer, defaultState);

    const setTableSize = (newTableSize) => {
        dispatch({ type: stateActions.SET_TABLE_SIZE, newTableSize });
    };

    const providerValue = {
        setTableSize
    };

    return (
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
};