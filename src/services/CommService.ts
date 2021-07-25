import axios from 'axios';
import { UserDataResponse, UserQuestionsResponse } from '../types';

const instance = axios.create({
  baseURL: 'https://api.stackexchange.com/2.3',
  timeout: 60000
});

export const getStackOverflowUserDataAndQuestions: (id: string) => Promise<{ data: UserDataResponse, questions: UserQuestionsResponse }> = async (id: string) => {
  try {
    const [userDataRes, userQuestionsRes] = await Promise.all([
      instance.get(`/users/${id}?order=desc&sort=reputation&site=stackoverflow`),
      instance.get(`/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`)
    ]);

    return Promise.resolve({
      data: userDataRes.data,
      questions: userQuestionsRes.data
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
