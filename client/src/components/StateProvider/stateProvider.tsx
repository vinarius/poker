import React, { createContext, useReducer } from 'react';
import myReducer from './myReducer';
import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';
import { IState } from '../../interfaces/state';

export const MyContext = createContext({});

export const StateProvider = (props: any) => {

    const defaultState: IState = {
        inGame: true,
        deck: ShuffleDeck(),
        chatInput: '',
        chatHistory: []
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

    const updateChatInput: ()=> void = (newChatText: string) => {
        dispatch({ type: stateActions.UPDATE_CHAT_INPUT, payload: newChatText });
    };

    const updateChatHistory: ()=> void = (newChatHistory: string[]) => {
        dispatch({ type: stateActions.UPDATE_CHAT_HISTORY, payload: newChatHistory});
    };

    const {
        inGame,
        tableSize,
        deck,
        chatInput,
        chatHistory
    } = state;

    const providerValue = {
        inGame,
        tableSize,
        deck,
        chatInput,
        chatHistory,
        shuffleDeck,
        drawCard,
        enterGame,
        exitGame,
        updateChatInput,
        updateChatHistory
    };

    return (
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
};