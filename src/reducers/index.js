const initialState = {
  username: "Santiago",
  totalAmount: 250000
};


function reducer(state=initialState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      console.log('depositing money');
      return {
        ...state,
        actionable: `DEPOSITANDO ${action.body}`,
      };
    default:
      console.log('default action');
      return {
        ...state,
        actionable: `not much this time`,
      };
  }
};

export default reducer;
