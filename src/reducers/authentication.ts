import {types} from '../actions/authentication';

const INIT_STATE = {
  user: {
    name: 'Lúcio Henrique',
  },
  isAuthenticed: false,
};

const authentication = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case types.FAKE_AUTH:
      return {
        ...state,
        isAuthenticed: action.payload,
      };
    default:
      return state;
  }
};

export default authentication;
