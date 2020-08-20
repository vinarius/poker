import React, { createContext, useReducer } from 'react';
import myReducer from './myReducer';
import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';

export const MyContext = createContext();

export const StateProvider = (props) => {

    const defaultState = {
        tableSize: 'small',
        deck: ShuffleDeck()
    };

    const [state, dispatch] = useReducer(myReducer, defaultState);

    const setTableSize = (newTableSize) => {
        dispatch({ type: stateActions.SET_TABLE_SIZE, newTableSize });
    };

    const shuffleDeck = () => {
        dispatch({ type: stateActions.SHUFFLE_DECK });
    };

    const {
        tableSize,
        deck
    } = state;

    const providerValue = {
        tableSize,
        deck,
        setTableSize,
        shuffleDeck
    };

    return (
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
};