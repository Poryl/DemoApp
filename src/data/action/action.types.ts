import {Todo} from './state.types';

export enum DataActionNames {
  LOAD_TODO_LIST = 'LOAD_TODO_LIST',
  SET_TODO_LIST = 'SET_TODO_LIST',
  ADD_TODO_LIST = 'ADD_TODO_LIST',
  UPDATE_TODO_LIST = 'UPDATE_TODO_LIST',
  DELETE_TODO_LIST = 'DELETE_TODO_LIST',
}

export interface LoadTodoListAction {
  type: DataActionNames.LOAD_TODO_LIST;
}

export interface SetTodoListAction {
  type: DataActionNames.SET_TODO_LIST;
  listTodo: Array<Todo>;
}

export interface AddTodoListAction {
  type: DataActionNames.ADD_TODO_LIST;
  todo: Todo;
}
export interface UpdateTodoListAction {
  type: DataActionNames.UPDATE_TODO_LIST;
  todo: Todo;
}
export interface DeleteTodoListAction {
  type: DataActionNames.DELETE_TODO_LIST;
  todo: Todo;
}

export type DataActionTypes =
  | LoadTodoListAction
  | SetTodoListAction
  | AddTodoListAction
  | UpdateTodoListAction
  | DeleteTodoListAction;
