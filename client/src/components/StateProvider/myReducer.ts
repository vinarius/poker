import { State } from '../../interfaces/state';
import { stateActions } from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';

export default (state: State, action: any) => {
  switch (action.type) {
    case stateActions.DRAW_CARD:
      return drawCard(state);
    case stateActions.ENTER_GAME:
      return enterGame(state);
    case stateActions.EXIT_GAME:
      return exitGame(state);
    case stateActions.SHUFFLE_DECK:
      return shuffleDeck(state);
    case stateActions.UPDATE_CHAT_HISTORY:
      return updateChatHistory(state, action.payload);
    case stateActions.UPDATE_CHAT_INPUT:
      return updateChatInput(state, action.payload);
    default:
      return state;
  }
};

const shuffleDeck = (state: State) => ({
  ...state,
  deck: ShuffleDeck()
});

const drawCard = (state: State) => ({
  ...state,
  deck: state.deck.shift()
});

const enterGame = (state: State) => ({
  ...state,
  inGame: true
});

const exitGame = (state: State) => ({
  ...state,
  inGame: false
});

const updateChatInput = (state: State, newChatText: string) => ({
  ...state,
  chatInput: newChatText
});

const updateChatHistory = (state: State, newChatMessage: string[]) => ({
  ...state,
  chatHistory: [...state.chatHistory, newChatMessage]
});