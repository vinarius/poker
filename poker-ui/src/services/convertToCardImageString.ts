import { ICard } from '../interfaces/card';

export default (card: ICard): string => {
    let value: string;
    switch(card.value) {
        case 'jack':
            value = 'J';
            break;
        case 'queen':
            value = 'Q';
            break;
        case 'king':
            value = 'K';
            break;
        case 'ace':
            value = 'A';
            break;
        default:
            value = card.value.toString();
            break;
    }

    let suit: string;
    switch(card.suit) {
        case 'spades':
            suit = 'S';
            break;
        case 'hearts':
            suit = 'H';
            break;
        case 'clubs':
            suit = 'C';
            break;
        case 'diamonds':
            suit = 'D';
            break;
        default:
            throw new Error('invalid suit detected');
    }

    return `${value}${suit}`;
};