// @flow
import reduxMock from '../../stores/__mock__/redux.mock';
import {stateDataReducer} from '../reducer/reducer';
import {setTodoList, addTodoList, updateTodoList, deleteTodoList} from '../action/actions';
import {TODO_LIST} from '../../../res/data/todo';

const getStore = () => reduxMock({stateDataReducer});

describe('Redux Store', () => {
  it('should set todo list', () => {
    const {dispatch, getState} = getStore();
    dispatch(setTodoList(TODO_LIST));
    expect(getState().stateDataReducer.listTodo).toHaveLength(1);
  });
  it('should add todo in list', () => {
    const {dispatch, getState} = getStore();
    const todo = {
      text: 'Tuan',
      id: 4321,
      createdDate: new Date(),
      priority: 0,
    };
    dispatch(addTodoList(todo));
    expect(getState().stateDataReducer.listTodo).toHaveLength(1);
    dispatch(addTodoList(todo));
    expect(getState().stateDataReducer.listTodo).toHaveLength(2);
    dispatch(addTodoList(todo));
    expect(getState().stateDataReducer.listTodo).toHaveLength(3);
  });
  it('should update todo in list', () => {
    const {dispatch, getState} = getStore();
    const todo = {
      text: 'Tuan',
      id: 4321,
      createdDate: new Date(),
      priority: 0,
    };
    dispatch(addTodoList(todo));
    expect(getState().stateDataReducer.listTodo[0]).toEqual(todo);
    const updatedTodo = {
      text: 'Tuan',
      id: 4321,
      createdDate: new Date(),
      priority: 0,
    };
    dispatch(updateTodoList(updatedTodo));
    expect(getState().stateDataReducer.listTodo).toHaveLength(1);
    expect(getState().stateDataReducer.listTodo[0]).toEqual(updatedTodo);
  });
  it('should delete todo in list', () => {
    const {dispatch, getState} = getStore();
    const todo = {
      text: 'Tuan',
      id: 4321,
      createdDate: new Date(),
      priority: 0,
    };
    dispatch(addTodoList(todo));
    expect(getState().stateDataReducer.listTodo).toHaveLength(1);
    dispatch(deleteTodoList(todo));
    expect(getState().stateDataReducer.listTodo).toHaveLength(0);
  });
});
