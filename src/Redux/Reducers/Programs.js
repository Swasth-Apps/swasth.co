import actions from '../Actions/Programs';


const INIT_STATE = {
    programs: [],
    topics: []
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.SET_PROGRAMS:
            return {
                ...state,
                programs: action.payload.programs,
            };
        case actions.SET_TOPICS:
            return {
                ...state,
                topics: action.payload.topics,
            };
        default:
            return state;
    }
};
