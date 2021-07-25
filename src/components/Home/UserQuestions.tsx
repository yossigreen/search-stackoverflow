import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { ThemedText } from '../Common';
import { UserQuestion } from '../../types';
import QuestionListItem from './QuestionListItem';
import { useTheme } from '../../hooks/Theme';
import { OPEN_QUESTION_PAGE } from '../../constants';

const SORT_BUTTONS: { title: string, sortBy: SortOptions }[] = [
  { title: 'Date', sortBy: 'creation_date' },
  { title: 'Answers', sortBy: 'answer_count' },
  { title: 'Views', sortBy: 'view_count' }
];

type SortOptions = 'creation_date'|'answer_count'|'view_count';

interface Props {
  userQuestions: UserQuestion[]
}

const UserQuestions = ({ userQuestions }: Props) => {
  const { color, backgroundColor } = useTheme();
  const dispatch = useDispatch();
  const [sort, setSort] = useState<SortOptions>('creation_date');

  const renderSortButtons = () => {
    return SORT_BUTTONS.map(({ title, sortBy }, index) => (
      <TouchableOpacity key={index} onPress={() => setSort(sortBy)}>
        <View
          style={[
            styles.questionButton,
            {
              borderColor: color,
              backgroundColor: sortBy === sort ? color : backgroundColor
            }
          ]}
        >
          <ThemedText style={{ color: sortBy === sort ? backgroundColor : color }}>{title}</ThemedText>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <>
      <View style={styles.sortWrapper}>
        <ThemedText>Sort by:   </ThemedText>
        {renderSortButtons()}
      </View>

      <FlatList
        data={_.sortBy(userQuestions || [], (q: UserQuestion) => q[sort])}
        renderItem={({ item }) => (
          <QuestionListItem
            question={item}
            onPress={() => dispatch({
              type: OPEN_QUESTION_PAGE,
              payload: { url: item.link, title: item.title }
            })}
          />
        )}
        keyExtractor={(__, index) => index.toString()}
        ListEmptyComponent={() => (
          <ThemedText style={styles.noResults}>{'No questions\nfound'}</ThemedText>
        )}
      />

      <ThemedText style={styles.totalResults}>{`Total of ${userQuestions.length} questions found`}</ThemedText>
    </>
  );
};

const styles = StyleSheet.create({
  sortWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  noResults: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 30
  },
  questionButton: {
    width: 60,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.6
  },
  totalResults: {
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 10
  }
});

export default UserQuestions;
