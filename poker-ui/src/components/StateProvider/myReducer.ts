import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';

export default (state, action) => {
    switch(action.type) {
        case stateActions.SHUFFLE_DECK:
            return shuffleDeck(state);
        case stateActions.DRAW_CARD:
            return drawCard;
        default:
            return state;
    }
};

const shuffleDeck = (state) => ({
    ...state,
    deck: ShuffleDeck()
});

const drawCard = (state) => ({
    ...state,
    deck: state.deck.shift()
});