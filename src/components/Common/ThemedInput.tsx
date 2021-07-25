import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';
import { useTheme } from '../../hooks/Theme';
import { SCREEN_WIDTH } from '../../constants';

interface Props extends TextInputProps {
  style?: TextStyle,
  onSearchUser(id: string): void
}

const ThemedInput = (props: Props) => {
  const { style, onSearchUser } = props;

  const { color } = useTheme();

  const [value, setValue] = useState('');

  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={setValue}
      allowFontScaling={false}
      onSubmitEditing={() => {
        onSearchUser(value);
        setValue('');
      }}
      placeholder="Enter stackoverflow user ID"
      placeholderTextColor={color}
      style={[styles.defaultStyles, style, { color, borderBottomColor: color }]}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    width: SCREEN_WIDTH * 0.75,
    fontSize: 14,
    height: 30,
    borderBottomWidth: 1,
    marginVertical: 20,
    padding: 0
  }
});

export { ThemedInput };
