const actions = {
    SET_PROGRAMS: 'SET_PROGRAMS',
    SET_RELATED_PROGRAMS: 'SET_RELATED_PROGRAMS',
    SET_PROGRAM: 'SET_PROGRAM',
    SET_MARKETING_PROGRAMS: 'SET_MARKETING_PROGRAMS',
    SET_ORGANIZATIONS: 'SET_ORGANIZATIONS',
    SET_ORGANIZATIONS_BY_ID: 'SET_ORGANIZATIONS_BY_ID',
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
export const setRelatedProgram = (programs,slug) => ({
    type: actions.SET_RELATED_PROGRAMS,
    payload: {
        programs,
        slug
    },
});
export const setProgram = (program,slug) => ({
    type: actions.SET_PROGRAM,
    payload: {
        program,
        slug
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
export const setOrganizations = (organizations) => ({
    type: actions.SET_ORGANIZATIONS,
    payload: {
        organizations,
    },
});
export const setOrganizationById = (organization,id) => ({
    type: actions.SET_ORGANIZATIONS_BY_ID,
    payload: {
        organization,
        id
    },
});

export default actions;
