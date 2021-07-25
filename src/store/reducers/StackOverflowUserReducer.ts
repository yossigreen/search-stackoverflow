import { StackOverflowUserReducer, ThunkAction } from '../../types';
import { SET_USER_DATA, TOGGLE_LOADER } from '../../constants';

const INITIAL_STATE :StackOverflowUserReducer = {
  isLoading: false,
  user: undefined
};

export default (state = INITIAL_STATE, action: ThunkAction) => {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return { ...state, isLoading: true };
    }

    case SET_USER_DATA: {
      const { user } = action.payload;
      return { ...state, user, isLoading: false };
    }

    default:
      return state;
  }
};
