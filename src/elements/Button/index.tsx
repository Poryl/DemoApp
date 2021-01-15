import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export const CustomButton = (props: any) => {
  if (props.disabled) var btnColor = 'grey';
  else var btnColor: string = props.color != undefined ? props.color : 'blue';
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
