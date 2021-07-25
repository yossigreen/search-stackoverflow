import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import UserDataCard from './UserDataCard';
import UserQuestions from './UserQuestions';
import { ThemedText } from '../Common';
import { useTheme } from '../../hooks/Theme';
import { StackOverflowUserReducer, Store } from '../../types';

const UserData = () => {
  const { color } = useTheme();
  const { isLoading, user } = useSelector<Store, StackOverflowUserReducer>((state) => state.soUser);

  if (isLoading || !user) {
    return (
      <View style={styles.container}>
        {
          isLoading
            ? <ActivityIndicator size="large" color={color} />
            : <ThemedText style={styles.noDataText}>{'No user\ndata available'}</ThemedText>
        }
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UserDataCard userData={user?.data ?? {}} />
      <UserQuestions userQuestions={user?.questions || []} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDataText: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default UserData;
