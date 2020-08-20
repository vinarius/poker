import stateActions from './stateActions';
import ShuffleDeck from '../../services/shuffleDeck';

export default (state, action) => {
    switch(action.type) {
        case stateActions.SET_TABLE_SIZE:
            return setTableSize(state, action.newTableSize);
        case stateActions.SHUFFLE_DECK:
            return shuffleDeck(state);
        default:
            return state;
    }
};

const setTableSize = (state, newTableSize) => ({
    ...state,
    tableSize: newTableSize
});

const shuffleDeck = (state) => ({
    ...state,
    deck: ShuffleDeck()
});