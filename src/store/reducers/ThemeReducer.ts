import { ThemeReducer } from '../../types';
import { TOGGLE_THEME } from '../../constants';

const INITIAL_STATE :ThemeReducer = {
  isDark: false
};

export default (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return { ...state, isDark: !state.isDark };
    }

    default:
      return state;
  }
};
