import actions from '../Actions/Programs';


const INIT_STATE = {
    programs: [],
    marketingPrograms: [],
    topics: [],
    resilifyLoading: false,
    coachingLoading: false,
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.SET_PROGRAMS:
            return {
                ...state,
                programs: action.payload.programs,
            };
        case actions.SET_MARKETING_PROGRAMS:
            return {
                ...state,
                marketingPrograms: action.payload.programs,
            };
        case actions.SET_TOPICS:
            return {
                ...state,
                topics: action.payload.topics,
            };
        case actions.SET_RESILIFY_LOADING:
            return {
                ...state,
                resilifyLoading: action.payload.loading,
            };
        case actions.SET_COACHING_LOADING:
            return {
                ...state,
                coachingLoading: action.payload.loading,
            };
        default:
            return state;
    }
};
