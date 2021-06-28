import {Card,Suit} from '../interfaces/card';

export const drawCard = (): Card => {
  return {
    isVisible: false,
    rank: 3,
    suit: Suit.spades
  };
}