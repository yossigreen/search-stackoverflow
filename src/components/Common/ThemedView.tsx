import React, { ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/Theme';

interface Props extends ViewProps {
  children?: ReactNode,
  style?: ViewStyle
}

const ThemedView = (props: Props) => {
  const { children, style } = props;

  const { backgroundColor } = useTheme();

  return (
    <View {...props} style={[style, { backgroundColor }]}>
      {children}
    </View>
  );
};

export { ThemedView };
