import React, { createContext, useReducer } from 'react';
import myReducer from './myReducer';
import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';
import { IState } from '../../interfaces/state';

export const MyContext = createContext();

export const StateProvider = (props: any) => {

    const defaultState: IState = {
        inGame: true,
        deck: ShuffleDeck()
    };

    const [state, dispatch] = useReducer(myReducer, defaultState);

    const shuffleDeck: ()=> void = () => {
        dispatch({ type: stateActions.SHUFFLE_DECK });
    };

    const drawCard: ()=> void = () => {
        dispatch({ type: stateActions.DRAW_CARD });
    };

    const enterGame: ()=> void = () => {
        dispatch({ type: stateActions.ENTER_GAME });
    };

    const exitGame: ()=> void = () => {
        dispatch({ type: stateActions.EXIT_GAME });
    };

    const {
        inGame,
        tableSize,
        deck
    } = state;

    const providerValue = {
        inGame,
        tableSize,
        deck,
        shuffleDeck,
        drawCard,
        enterGame,
        exitGame
    };

    return (
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
};