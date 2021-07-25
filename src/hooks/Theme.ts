import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { Store, ThemeReducer } from '../types';

export const useTheme = () => {
  const { isDark } = useSelector<Store, ThemeReducer>((state) => state.theme);

  useEffect(() => {
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content', true);
  }, [isDark]);

  return {
    isDark,
    backgroundColor: isDark ? '#000' : '#fff',
    color: isDark ? '#fff' : '#000'
  };
};
