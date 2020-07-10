import stateActions from './stateActions';

export default (state, action) => {
    switch(action.type) {
        case stateActions.SET_TABLE_SIZE:
            setTableSize(state, action.newTableSize);
        default:
            return state;
    }
};

const setTableSize = (state, newTableSize) => ({
    ...state,
    tableSize: newTableSize
});