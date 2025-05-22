const buyGame = (state, action) => {
  const i = state.games.findIndex((e) => e.name == action.name);
  return {
    ...state,
    games: [
      ...state.games.slice(0, i),
      { ...state.games[i], purchased: true },
      ...state.games.slice(i + 1),
    ],
  };
};

export { buyGame };
