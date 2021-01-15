import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';

export const CardScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.content}
        data={[{}, {}, {}]}
        renderItem={this.renderItemSound}
      />
    </View>
  );
};
