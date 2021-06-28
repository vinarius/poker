import { Card } from '../interfaces/card';

import twoOfSpades from '../assets/Playing_Cards/2S.png';
import twoOfHearts from '../assets/Playing_Cards/2H.png';
import twoOfClubs from '../assets/Playing_Cards/2C.png';
import twoOfDiamonds from '../assets/Playing_Cards/2D.png';
import threeOfSpades from '../assets/Playing_Cards/3S.png';
import threeOfHearts from '../assets/Playing_Cards/3H.png';
import threeOfClubs from '../assets/Playing_Cards/3C.png';
import threeOfDiamonds from '../assets/Playing_Cards/3D.png';
import fourOfSpades from '../assets/Playing_Cards/4S.png';
import fourOfHearts from '../assets/Playing_Cards/4H.png';
import fourOfClubs from '../assets/Playing_Cards/4C.png';
import fourOfDiamonds from '../assets/Playing_Cards/4D.png';
import fiveOfSpades from '../assets/Playing_Cards/5S.png';
import fiveOfHearts from '../assets/Playing_Cards/5H.png';
import fiveOfClubs from '../assets/Playing_Cards/5C.png';
import fiveOfDiamonds from '../assets/Playing_Cards/5D.png';
import sixOfSpades from '../assets/Playing_Cards/6S.png';
import sixOfHearts from '../assets/Playing_Cards/6H.png';
import sixOfClubs from '../assets/Playing_Cards/6C.png';
import sixOfDiamonds from '../assets/Playing_Cards/6D.png';
import sevenOfSpades from '../assets/Playing_Cards/7S.png';
import sevenOfHearts from '../assets/Playing_Cards/7H.png';
import sevenOfClubs from '../assets/Playing_Cards/7C.png';
import sevenOfDiamonds from '../assets/Playing_Cards/7D.png';
import eightOfSpades from '../assets/Playing_Cards/8S.png';
import eightOfHearts from '../assets/Playing_Cards/8H.png';
import eightOfClubs from '../assets/Playing_Cards/8C.png';
import eightOfDiamonds from '../assets/Playing_Cards/8D.png';
import nineOfSpades from '../assets/Playing_Cards/9S.png';
import nineOfHearts from '../assets/Playing_Cards/9H.png';
import nineOfClubs from '../assets/Playing_Cards/9C.png';
import nineOfDiamonds from '../assets/Playing_Cards/9D.png';
import tenOfSpades from '../assets/Playing_Cards/10S.png';
import tenOfHearts from '../assets/Playing_Cards/10H.png';
import tenOfClubs from '../assets/Playing_Cards/10C.png';
import tenOfDiamonds from '../assets/Playing_Cards/10D.png';
import jackOfSpades from '../assets/Playing_Cards/JS.png';
import jackOfHearts from '../assets/Playing_Cards/JH.png';
import jackOfClubs from '../assets/Playing_Cards/JC.png';
import jackOfDiamonds from '../assets/Playing_Cards/JD.png';
import queenOfSpades from '../assets/Playing_Cards/QS.png';
import queenOfHearts from '../assets/Playing_Cards/QH.png';
import queenOfClubs from '../assets/Playing_Cards/QC.png';
import queenOfDiamonds from '../assets/Playing_Cards/QD.png';
import kingOfSpades from '../assets/Playing_Cards/KS.png';
import kingOfHearts from '../assets/Playing_Cards/KH.png';
import kingOfClubs from '../assets/Playing_Cards/KC.png';
import kingOfDiamonds from '../assets/Playing_Cards/KD.png';
import aceOfSpades from '../assets/Playing_Cards/AS.png';
import aceOfHearts from '../assets/Playing_Cards/AH.png';
import aceOfClubs from '../assets/Playing_Cards/AC.png';
import aceOfDiamonds from '../assets/Playing_Cards/AD.png';

export function convertToCardImageString(card: Card): string {
    let rank: string;
    switch(card.rank) {
        case 'jack':
            rank = 'J';
            break;
        case 'queen':
            rank = 'Q';
            break;
        case 'king':
            rank = 'K';
            break;
        case 'ace':
            rank = 'A';
            break;
        default:
            rank = card.rank.toString();
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

    return `${rank}${suit}`;
};

export function getImage(cardRank: string): string {
    switch(cardRank) {
        case '2S':
            return twoOfSpades;
        case '2H':
            return twoOfHearts;
        case '2C':
            return twoOfClubs;
        case '2D':
            return twoOfDiamonds;
        case '3S':
            return threeOfSpades;
        case '3H':
            return threeOfHearts;
        case '3C':
            return threeOfClubs;
        case '3D':
            return threeOfDiamonds;
        case '4S':
            return fourOfSpades;
        case '4H':
            return fourOfHearts;
        case '4C':
            return fourOfClubs;
        case '4D':
            return fourOfDiamonds;
        case '5S':
            return fiveOfSpades;
        case '5H':
            return fiveOfHearts;
        case '5C':
            return fiveOfClubs;
        case '5D':
            return fiveOfDiamonds;
        case '6S':
            return sixOfSpades;
        case '6H':
            return sixOfHearts;
        case '6C':
            return sixOfClubs;
        case '6D':
            return sixOfDiamonds;
        case '7S':
            return sevenOfSpades;
        case '7H':
            return sevenOfHearts;
        case '7C':
            return sevenOfClubs;
        case '7D':
            return sevenOfDiamonds;
        case '8S':
            return eightOfSpades;
        case '8H':
            return eightOfHearts;
        case '8C':
            return eightOfClubs;
        case '8D':
            return eightOfDiamonds;
        case '9S':
            return nineOfSpades;
        case '9H':
            return nineOfHearts;
        case '9C':
            return nineOfClubs;
        case '9D':
            return nineOfDiamonds;
        case '10S':
            return tenOfSpades;
        case '10H':
            return tenOfHearts;
        case '10C':
            return tenOfClubs;
        case '10D':
            return tenOfDiamonds;
        case 'JS':
            return jackOfSpades;
        case 'JH':
            return jackOfHearts;
        case 'JC':
            return jackOfClubs;
        case 'JD':
            return jackOfDiamonds;
        case 'QS':
            return queenOfSpades;
        case 'QH':
            return queenOfHearts;
        case 'QC':
            return queenOfClubs;
        case 'QD':
            return queenOfDiamonds;
        case 'KS':
            return kingOfSpades;
        case 'KH':
            return kingOfHearts;
        case 'KC':
            return kingOfClubs;
        case 'KD':
            return kingOfDiamonds;
        case 'AS':
            return aceOfSpades;
        case 'AH':
            return aceOfHearts;
        case 'AC':
            return aceOfClubs;
        case 'AD':
            return aceOfDiamonds;
        default:
            console.log('card rank:', cardRank)
            throw new Error('unknown card type, cannot get image');
    }
}

export function formatCashString(amount: number): string {
    let cashrankSplit: string[] = amount.toString().split('');
    const stringConstructorArr: string[] = [];

    for(let i = cashrankSplit.length - 1; i >= 0; i--) {
        if(stringConstructorArr.length % 3 === 0 && stringConstructorArr.length !== 0) stringConstructorArr.unshift(',');
        stringConstructorArr.unshift(cashrankSplit[i]);
    }

    stringConstructorArr.unshift('$');

    const result = stringConstructorArr.join('');

    return result;
}