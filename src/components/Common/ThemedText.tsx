import React, { ReactNode } from 'react';
import { StyleSheet, TextProps, TextStyle, Text } from 'react-native';
import { useTheme } from '../../hooks/Theme';

interface Props extends TextProps {
  children?: ReactNode,
  style?: TextStyle
}

const ThemedText = (props: Props) => {
  const { children, style } = props;

  const { color } = useTheme();

  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[styles.defaultStyles, { color }, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    fontSize: 14
  }
});

export { ThemedText };
