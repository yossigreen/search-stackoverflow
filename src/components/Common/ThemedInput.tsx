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
  const [minWidth, setMinWidth] = useState<number|undefined>(undefined);

  return (
    <TextInput
      {...props}
      style={[styles.defaultStyles, style, { color, borderBottomColor: color, minWidth }]}
      value={value}
      onChangeText={setValue}
      onSubmitEditing={() => {
        onSearchUser(value);
        setValue('');
      }}
      placeholder="Enter stackoverflow user ID"
      placeholderTextColor={color}
      allowFontScaling={false}
      onLayout={({ nativeEvent: { layout: { width } } }) => !minWidth && setMinWidth(width)}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    fontSize: 14,
    height: 30,
    borderBottomWidth: 1,
    marginTop: 20,
    padding: 0,
    textAlign: 'center'
  }
});

export { ThemedInput };
