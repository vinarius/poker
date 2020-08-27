import { ICard } from './card';

export interface IState {
    inGame: Boolean;
    deck: ICard[];
    // river: ICard[]
}