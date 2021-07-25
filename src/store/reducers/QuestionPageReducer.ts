import { QuestionPageReducer } from '../../types';
import { OPEN_QUESTION_PAGE, CLOSE_QUESTION_PAGE } from '../../constants';

const INITIAL_STATE :QuestionPageReducer = {
  showQuestionPage: false,
  url: '',
  title: ''
};

export default (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case OPEN_QUESTION_PAGE: {
      const { url, title } = action.payload;
      return { ...state, showQuestionPage: true, url, title };
    }

    case CLOSE_QUESTION_PAGE: {
      return { ...state, showQuestionPage: false };
    }

    default:
      return state;
  }
};
