import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export type RNButtonProps = {
  title?: string;
};

export const RNButton: React.FC<RNButtonProps> = ({
  title = 'sddsdsdsd',
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {}}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
  
// });

RNButton.displayName = 'RNButton';
