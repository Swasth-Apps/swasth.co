const actions = {
    SET_PROGRAMS: 'SET_PROGRAMS',
    SET_TOPICS: 'SET_TOPICS',
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

export default actions;
