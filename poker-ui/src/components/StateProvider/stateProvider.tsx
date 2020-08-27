import React, { createContext, useReducer } from 'react';
import myReducer from './myReducer';
import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';
import { IState } from '../../interfaces/state';

export const MyContext = createContext();

export const StateProvider = (props) => {

    const defaultState: IState = {
        deck: ShuffleDeck()
    };

    const [state, dispatch] = useReducer(myReducer, defaultState);

    const shuffleDeck = () => {
        dispatch({ type: stateActions.SHUFFLE_DECK });
    };

    const drawCard = () => {
        dispatch({ type: stateActions.DRAW_CARD });
    };

    const {
        tableSize,
        deck
    } = state;

    const providerValue = {
        tableSize,
        deck,
        shuffleDeck,
        drawCard
    };

    return (
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
};