import { ICard } from './card';

export interface IState {
    inGame: Boolean;
    deck: ICard[];
    // river: ICard[];
    chatInput: string;
    chatHistory: string[] // update later
}