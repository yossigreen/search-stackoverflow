export interface Store {
  theme: ThemeReducer,
  soUser: StackOverflowUserReducer,
  questionPage: QuestionPageReducer
}

export interface ThunkAction {
  type: string,
  payload?: any
}

export interface UserDataResponse {
  items: UserItem[]
}

export interface UserItem {
  display_name: string,
  reputation: number,
  profile_image: string
}

export interface UserQuestionsResponse {
  items: UserQuestion[]
}

export interface UserQuestion {
  answer_count: number,
  tags: string[],
  title: string,
  view_count: number,
  creation_date: number,
  link: string
}

export interface ThemeReducer {
  isDark: boolean
}

export interface StackOverflowUserReducer {
  isLoading: boolean,
  user?: {
    data: UserItem,
    questions: UserQuestion[]
  }
}

export interface QuestionPageReducer {
  showQuestionPage: boolean,
  url: string,
  title: string
}
