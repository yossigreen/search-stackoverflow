import { Alert } from 'react-native';
import { getStackOverflowUserDataAndQuestions } from '../../services/CommService';
import { TOGGLE_LOADER, SET_USER_DATA } from '../../constants';

export const searchUser = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: TOGGLE_LOADER });
    const { data, questions } = await getStackOverflowUserDataAndQuestions(id);

    if (!data || data.items.length !== 1) {
      return onError(dispatch, 'No user found, please try a valid user ID');
    }

    return dispatch({
      type: SET_USER_DATA,
      payload: { user: { data: data.items[0], questions: questions.items } }
    });
  } catch (e) {
    return onError(dispatch, 'An error occurred, please try a valid user ID');
  }
};

const onError = (dispatch: any, error: string) => {
  dispatch({ type: SET_USER_DATA, payload: { user: undefined } });
  Alert.alert(error);
};
