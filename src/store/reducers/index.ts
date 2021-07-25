import { combineReducers } from 'redux';
import ThemeReducer from './ThemeReducer';
import StackOverflowUserReducer from './StackOverflowUserReducer';
import QuestionPageReducer from './QuestionPageReducer';

export default combineReducers({
  theme: ThemeReducer,
  soUser: StackOverflowUserReducer,
  questionPage: QuestionPageReducer
});
