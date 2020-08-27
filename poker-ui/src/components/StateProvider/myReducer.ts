import { IState } from './../../interfaces/state';
import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';

export default (state: IState, action) => {
    switch(action.type) {
        case stateActions.SHUFFLE_DECK:
            return shuffleDeck(state);
        case stateActions.DRAW_CARD:
            return drawCard(state);
        case stateActions.ENTER_GAME:
            return enterGame(state);
        case stateActions.EXIT_GAME:
            return exitGame(state);
        default:
            return state;
    }
};

const shuffleDeck = (state: IState) => ({
    ...state,
    deck: ShuffleDeck()
});

const drawCard = (state: IState) => ({
    ...state,
    deck: state.deck.shift()
});

const enterGame = (state: IState) => ({
    ...state,
    inGame: true
});

const exitGame = (state: IState) => ({
    ...state,
    inGame: false
});