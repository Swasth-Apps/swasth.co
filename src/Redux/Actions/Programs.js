const actions = {
    SET_PROGRAMS: 'SET_PROGRAMS',
    SET_MARKETING_PROGRAMS: 'SET_MARKETING_PROGRAMS',
    SET_TOPICS: 'SET_TOPICS',
    SET_RESILIFY_LOADING: 'SET_RESILIFY_LOADING',
    SET_COACHING_LOADING: 'SET_COACHING_LOADING'
};

export const setPrograms = (programs) => ({
    type: actions.SET_PROGRAMS,
    payload: {
        programs,
    },
});

export const setTopics = (topics) => ({
    type: actions.SET_TOPICS,
    payload: {
        topics,
    },
});
export const setResilifyLoading = (loading) => ({
    type: actions.SET_RESILIFY_LOADING,
    payload: {
        loading,
    },
});
export const setMarketingLoading = (loading) => ({
    type: actions.SET_COACHING_LOADING,
    payload: {
        loading,
    },
});
export const setMarketingPrograms = (programs) => ({
    type: actions.SET_MARKETING_PROGRAMS,
    payload: {
        programs,
    },
});

export default actions;
