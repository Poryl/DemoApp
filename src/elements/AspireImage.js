import React from 'react';
import {Image} from 'react-native';

export const AspireImage = (props) => {
  const {tintColor, style, resizeMode, source} = props;
  return (
    <Image
      style={{...style, tintColor}}
      resizeMode={resizeMode}
      source={source}
    />
  );
};
