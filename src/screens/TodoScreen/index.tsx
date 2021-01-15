import React, {useState, useEffect, useCallback} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {loadTodoList} from '../../data/action/actions';
import {useTodoList} from '../../data/selector/selector';
import {
  addTodoList,
  deleteTodoList,
  updateTodoList,
} from '../../data/action/actions';
import {CustomButton} from '../../elements/Button/index';
import moment from 'moment';

export const Todo = () => {
  const [getText, setText] = useState('');
  const [editingItem, setEditingItem] = useState(undefined);
  const dispatch = useDispatch();
  const todoList = useTodoList();
  const addItem = useCallback(() => {
    dispatch(
      addTodoList({
        text: getText,
        priority: 0,
        createdDate: Date.now(),
        id: Math.random().toString(),
      }),
    );
    setText('');
    Keyboard.dismiss();
  }, [dispatch, getText]);

  const removeItem = useCallback(
    (item) => {
      Alert.alert(`Delete "${item.text}" ?`, '', [
        {
          text: 'No',
          onPress: () => {},
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(deleteTodoList(item));
            setText('');
          },
        },
      ]);
    },
    [dispatch],
  );

  useEffect(() => {
    if (editingItem) {
      setText(editingItem.text);
    }
  }, [editingItem]);

  useEffect(() => {
    dispatch(loadTodoList());
  }, [dispatch]);

  const updateItem = () => {
    dispatch(
      updateTodoList({
        id: editingItem.id,
        priority: editingItem.priority,
        createdDate: editingItem.createdDate,
        text: getText,
      }),
    );
    setText('');
  };

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
          text={editingItem ? 'UPDATE' : 'ADD'}
          textSize={16}
          textColor="white"
          onPressEvent={() => (editingItem ? updateItem() : addItem())}
          disabled={getText.length <= 0}
        />
      </View>
      <FlatList
        style={styles.scrollview}
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setEditingItem(item)}
            style={styles.scrollviewItem}>
            <View style={styles.scrollviewItemContent}>
              <Text style={styles.scrollviewText}>{index + 1}#</Text>
              <View style={styles.scrollviewItemContentTitleAndDate}>
                <Text style={styles.scrollviewText}>{item.text}</Text>
                <Text style={styles.scrollviewTextDate}>
                  {moment(item.createdDate).format('DD-MM-YYYY hh:mm')}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => removeItem(item)}
              style={styles.crosstextcontainer}>
              <Text style={styles.crosstext}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyView}>
            <Text style={styles.emptyText}>No ToDo Items! Hurray!</Text>
          </View>
        )}
      />
    </View>
  );
};
