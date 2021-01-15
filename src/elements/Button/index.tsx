import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import {COLORS} from '../../theme/Colors';

export const CustomButton = (props: any) => {
  if (props.disabled) var btnColor = COLORS.grey;
  else
    var btnColor: string =
      props.color != undefined ? props.color : COLORS.blue2;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPressEvent}
      disabled={props.disabled}>
      <View style={{...styles.buttonContainer, backgroundColor: btnColor}}>
        <Text
          style={{
            fontSize: props.textSize,
            color: props.textColor,
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
