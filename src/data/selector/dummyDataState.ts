import {AppState} from '../../stores/index';
/**
 * only for testing with jest!
 */
export const dummyDataState = {
  todoData: {
    listTodo: [],
  },
};
export const getAppState = (getStateFunction: any): AppState => {
  return getStateFunction();
};
