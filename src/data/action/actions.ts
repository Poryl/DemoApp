import {Todo} from './state.types';
import {
  DataActionNames,
  LoadTodoListAction,
  SetTodoListAction,
  AddTodoListAction,
  UpdateTodoListAction,
  DeleteTodoListAction,
} from './action.types';

export const loadTodoList = (): LoadTodoListAction => ({
  type: DataActionNames.LOAD_TODO_LIST,
});

export const setTodoList = (listTodo: Array<Todo>): SetTodoListAction => ({
  type: DataActionNames.SET_TODO_LIST,
  listTodo,
});

export const addTodoList = (todo: Todo): AddTodoListAction => ({
  type: DataActionNames.ADD_TODO_LIST,
  todo,
});

export const updateTodoList = (todo: Todo): UpdateTodoListAction => ({
  type: DataActionNames.UPDATE_TODO_LIST,
  todo,
});

export const deleteTodoList = (todo: Todo): DeleteTodoListAction => ({
  type: DataActionNames.DELETE_TODO_LIST,
  todo,
});
