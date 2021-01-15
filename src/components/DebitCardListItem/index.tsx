import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Alert,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import CustomButton from './elements/Button';
import {styles} from './styles';
import {todoItems} from './constants';

const ToDoScreen = (props) => {
  const [getText, setText] = useState('');
  const [getList, setList] = useState(todoItems);
  const [editingItem, setEditingItem] = useState(0);
  console.log('props', props);
  const addItem = () => {
    console.log(getText);
    setList([...getList, {key: Math.random().toString(), data: getText}]);
    setText('');
    Keyboard.dismiss();
  };

  const removeItem = (itemKey) => {
    Alert.alert(
      `Delete "${getList.find((item) => item.key == itemKey).data}" ?`,
      '',
      [
        {
          text: 'No',
          onPress: () => {},
        },
        {
          text: 'Yes',
          onPress: () =>
            setList((list) => getList.filter((item) => item.key != itemKey)),
        },
      ],
    );
  };

  const editItem = (item) => {
    setText(item.data);
    setEditingItem(item.key);
  };

  const updateItem = () => {
    setList((_list: any) =>
      getList.map((item) =>
        item.key === editingItem ? {key: item.key, data: getText} : item,
      ),
    );
    setText('');
    setEditingItem(0);
  };

  const scrollView = (
    <ScrollView style={styles.scrollview}>
      {getList.map((item, index) => (
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
          onPress={() => editItem(item)}>
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>
              {index + 1}# {item.data}
            </Text>
            <TouchableOpacity onPress={() => removeItem(item.key)}>
              <View style={styles.crosstextcontainer}>
                <Text style={styles.crosstext}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const emptyScrollView = (
    <View style={{paddingTop: 30}}>
      <Text style={{fontStyle: 'italic', fontSize: 20, color: 'grey'}}>
        No ToDo Items! Hurray!
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>todos</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Item"
          onChangeText={(text) => setText(text)}
          value={getText}
        />

        <CustomButton
          text={editingItem === 0 ? 'ADD' : 'UPDATE'}
          textSize={16}
          textColor="white"
          onPressEvent={editingItem === 0 ? addItem : updateItem}
          disabled={getText.length <= 0}
        />
      </View>
      {getList.length <= 0 ? emptyScrollView : scrollView}
    </View>
  );
};

// const mapState = (state, {thingId, udid}) => {
//   return {
//     thingId,
//     udid,
//     partNumber: getPartNo(state, thingId),
//   };
// };

// const mapDispatch = (dispatch) => ({});

// const Connected = connect(mapState, mapDispatch)(PCRDetails);

export default ToDoScreen;
