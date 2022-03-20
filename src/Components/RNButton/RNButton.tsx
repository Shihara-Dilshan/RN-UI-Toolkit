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
import {
  RNPrimaryWhite,
  RNPrimaryBlue,
  RNPrimaryGrey,
} from '../../config/Colors';

export type RNButtonProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  backgroundStyle?: StyleProp<TextStyle>;
  height?: number;
  width?: number;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

export const RNButton: React.FC<RNButtonProps> = ({
  title = '',
  titleStyle,
  backgroundStyle,
  height,
  width,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  disabled,
}) => {
  const BUTTON_PADDING_HORIZONTAL = 15;
  const BUTTON_PADDING_VERTICAL = 12;

  const buttonContainerStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      height: height,
      width: width,
      backgroundColor: RNPrimaryBlue as string,
      paddingHorizontal: BUTTON_PADDING_HORIZONTAL,
      paddingVertical: BUTTON_PADDING_VERTICAL,
      justifyContent: 'center',
      borderRadius: 10,
    },
    backgroundStyle,
    disabled
      ? {
          backgroundColor: RNPrimaryGrey as string,
        }
      : {},
  ]);

  const buttonTextStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      color: RNPrimaryWhite as string,
    },
    titleStyle,
  ]);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <View style={buttonContainerStyle}>
        <Text style={buttonTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

RNButton.displayName = 'RNButton';
