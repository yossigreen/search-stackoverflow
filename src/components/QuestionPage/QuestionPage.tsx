import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { ThemedText, ThemedView } from '../Common';
import { useTheme } from '../../hooks/Theme';
import { QuestionPageReducer, Store } from '../../types';
import { CLOSE_QUESTION_PAGE, PADDING_TOP, SCREEN_WIDTH } from '../../constants';

const QuestionPage = () => {
  const { backgroundColor } = useTheme();

  const dispatch = useDispatch();
  const { showQuestionPage, url, title } = useSelector<Store, QuestionPageReducer>((state) => state.questionPage);

  const closeQuestion = () => dispatch({ type: CLOSE_QUESTION_PAGE });

  return (
    <Modal
      style={{ flex: 1, backgroundColor }}
      visible={showQuestionPage}
      transparent={false}
      animationType="slide"
      onRequestClose={closeQuestion}
    >
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.title} numberOfLines={2}>{title}</ThemedText>
        <ThemedText style={styles.close} onPress={closeQuestion}>x</ThemedText>
      </ThemedView>
      <WebView
        style={{ flex: 1, backgroundColor }}
        source={{ uri: url }}
        startInLoadingState
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: SCREEN_WIDTH,
    height: 60 + PADDING_TOP,
    paddingTop: PADDING_TOP,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    fontSize: 17,
    textAlign: 'center',
    marginRight: 10
  },
  close: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});

export default QuestionPage;
