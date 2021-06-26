import React, {useContext} from 'react';

import {Card,Suit} from '../interfaces/card';
import {MyContext} from '../components/StateProvider/stateProvider';

export const drawCard = (): Card => {

  const {deck} = useContext<any>(MyContext);

  return {
    isVisible: false,
    rank: 3,
    suit: Suit.spades
  };
}