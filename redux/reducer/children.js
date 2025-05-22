const setChild = (state, action) => {
  return {
    ...state,
    children: {
      ...state.children,
      [action.id]: action.child,
    },
  };
};

const removeChild = (state, action) => {
  const deletedC = { ...state.children };
  delete deletedC[action.id];
  return {
    ...state,
    children: { ...deletedC },
  };
};

const editGames = (state, action) => {
  return {
    ...state,
    children: {
      ...state.children,
      [action.child]: {
        ...state.children[action.child],
        filteredGames: action.games,
      },
    },
  };
};

export { setChild, removeChild, editGames };
