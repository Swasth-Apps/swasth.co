import actions from '../Actions/Programs';


const INIT_STATE = {
    programs: [],
    program: {},
    marketingPrograms: [],
    relatedPrograms: [],
    organizations: [],
    organization: {},
    topics: [],
    resilifyLoading: false,
    coachingLoading: false,
};
const programs = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.SET_PROGRAMS:
            return {
                ...state,
                programs: action.payload.programs,
            };
        case actions.SET_RELATED_PROGRAMS:
            state.program[action.payload.slug] = {
                ...(state.program[action.payload.slug] || {}),
                relatedPrograms:action.payload.programs
            };

            return {
                ...state,
            };
        case actions.SET_PROGRAM:
            state.program[action.payload.slug] = {
                ...(state.program[action.payload.slug] || {}),
                program:action.payload.program,
            };
            return {
                ...state,
            };
        case actions.SET_MARKETING_PROGRAMS:
            return {
                ...state,
                marketingPrograms: action.payload.programs,
            };
        case actions.SET_ORGANIZATIONS:
            return {
                ...state,
                organizations: action.payload.organizations,
            };
        case actions.SET_ORGANIZATIONS_BY_ID:
            state.organization[action.payload.id] = action.payload.organization;
            return {
                ...state,
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

export default programs;
