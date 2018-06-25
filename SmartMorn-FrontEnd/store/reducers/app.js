
const initialState = {
  isFirstLoad: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
  doneFirstLoad: () => ({ type: DONE_FIRSTLOAD }),
};