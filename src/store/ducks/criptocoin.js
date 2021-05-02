export const Types = {
  ADD: "criptocoin/ADD",
};

const INITIAL_STATE = {
  coin: "TESTANDO DENTRO DO LAYOUT",
};

export const criptocoinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        coin: action.coin,
      };
    default:
      return state;
  }
};


export const coinAction = (value) => ({
  type: Types.ADD,
  coin: value
})
