import { Card } from './card';
import {Player} from './player';

export interface State {
    inGame: Boolean;
    deck: Card[];
    // river: Card[];
    chatInput: string;
    chatHistory: string[];
    playerData: Player[];
}