import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ThemedText } from './ThemedText';
import { useTheme } from '../../hooks/Theme';
import { TOGGLE_THEME } from '../../constants';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  return (
    <View style={styles.container}>
      <Switch
        value={isDark}
        onValueChange={() => { dispatch({ type: TOGGLE_THEME }); }}
      />
      <ThemedText>{`${isDark ? 'Dark' : 'Light'} theme`}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    alignSelf: 'flex-end'
  }
});

export { ThemeToggle };
