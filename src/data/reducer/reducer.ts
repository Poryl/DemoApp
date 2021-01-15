import {DataState} from '../action/state.types';
import {DataActionNames, DataActionTypes} from '../action/action.types';

const initialState: DataState = {
  listTodo: [],
};

export const stateDataReducer = (
  state: DataState = initialState,
  action: DataActionTypes,
): DataState => {
  switch (action.type) {
    case DataActionNames.SET_TODO_LIST: {
      const {listTodo} = action;
      return {
        ...state,
        listTodo,
      };
    }
    case DataActionNames.ADD_TODO_LIST: {
      const {todo} = action;
      return {
        ...state,
        listTodo: [...state.listTodo, todo],
      };
    }
    case DataActionNames.UPDATE_TODO_LIST: {
      const {todo} = action;
      const listTodoUpdated = state.listTodo.map((itemTodo) => {
        if (itemTodo.id === todo.id) {
          return todo;
        }
        return itemTodo;
      });
      return {
        ...state,
        listTodo: listTodoUpdated,
      };
    }
    case DataActionNames.DELETE_TODO_LIST: {
      const {todo} = action;
      const listTodoUpdated = state.listTodo.filter((itemTodo) => {
        if (itemTodo.id === todo.id) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        listTodo: listTodoUpdated,
      };
    }
    default:
      return state;
  }
};
