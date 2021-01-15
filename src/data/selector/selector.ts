import {useSelector} from 'react-redux';
import {AppState} from '../../stores';
import {DataState, Todo} from '../action/state.types';

export const selectStateData = (state: AppState): DataState => state.todoData;

export const selectTodoList = (state: AppState): Array<Todo> =>
  selectStateData(state).listTodo;

export const useTodoList = (): Array<Todo> =>
  useSelector((state: AppState) => selectTodoList(state));
