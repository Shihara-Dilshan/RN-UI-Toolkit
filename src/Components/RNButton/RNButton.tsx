import React from 'react';
import {
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native';

export type RNButtonProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  backgroundStyle?: StyleProp<TextStyle>;
  height?: number;
  width?: number;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

export const RNButton: React.FC<RNButtonProps> = ({
  title = '',
  onPress,
  titleStyle,
  backgroundStyle,
  height,
  width,
  disabled,
}) => {
  const buttonContainerStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    backgroundStyle,
    {
      height: height,
      width: width,
    },
    {
      backgroundColor: "blue"
    }
  ]);

  const buttonTextStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      color: 'white',
    },
    titleStyle
  ]);


  return (
    <TouchableOpacity onPressIn={onPress} disabled={disabled}>
      <View style={buttonContainerStyle}>
        <Text style={buttonTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({

// });

RNButton.displayName = 'RNButton';
