import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../Common';
import { UserQuestion } from '../../types';
import { SCREEN_WIDTH } from '../../constants';
import { useTheme } from '../../hooks/Theme';

interface Props {
  question: UserQuestion,
  onPress(): void
}

const QuestionListItem = ({ question, onPress }: Props) => {
  const { color } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.listItemContainer, { borderBottomColor: color }]}>
        <View style={styles.textWrapper}>
          <ThemedText style={styles.title} numberOfLines={2}>{question?.title}</ThemedText>
          <ThemedText numberOfLines={1}>{question?.tags.join()}</ThemedText>
        </View>

        <ThemedText style={{ fontSize: 25 }}>{'>'}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.6
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    paddingRight: 20
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default QuestionListItem;
