import {State} from '../../interfaces/state';
import ShuffleDeck from '../../services/shuffleDeck';

export const defaultState: State = {
  inGame: false,
  deck: ShuffleDeck(),
  chatInput: '',
  chatHistory: [],
  playerData: [
    {
      cardOne: null,
      cardTwo: null,
      cash: 10000,
      isSpectator: false,
      name: "Lauren",
      playerId: '121',
      seatPosition: 6
    },
    {
      cardOne: null,
      cardTwo: null,
      cash: 10000,
      isSpectator: false,
      name: "Mark",
      playerId: '122',
      seatPosition: 0
    }
  ]
};