import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import UserData from './UserData';
import QuestionPage from '../QuestionPage/QuestionPage';
import { ThemedView, ThemedText, ThemeToggle, ThemedInput } from '../Common';
import { searchUser } from '../../store/actions/StackoverflowUserActions';
import { PADDING_BOTTOM, PADDING_TOP } from '../../constants';

const Home = () => {
  const dispatch = useDispatch();

  const onSearchUser = (id: string) => {
    if (id) {
      dispatch(searchUser(id));
    }
  };

  return (
    <ThemedView style={styles.appContainer}>
      <ThemeToggle />
      <ThemedText style={{ fontSize: 25 }}>Find StackOverflow Posts</ThemedText>
      <ThemedInput onSearchUser={onSearchUser} />
      <UserData />
      <QuestionPage />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM
  }
});

export default Home;
