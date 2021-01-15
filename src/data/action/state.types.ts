export interface DataState {
  listTodo: Array<Todo>;
}

export interface Todo {
  text: string;
  priority: number;
  createdDate: number;
  id: string;
}
