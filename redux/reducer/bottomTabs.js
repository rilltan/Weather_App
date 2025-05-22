const disableBottomTabs = (state, action) => {
    return {
        ...state,
        bottomTabsActive: false,
    };
};

const enableBottomTabs = (state, action) => {
    return {
        ...state,
        bottomTabsActive: true,
    };
};

export {
    disableBottomTabs,
    enableBottomTabs,
};
