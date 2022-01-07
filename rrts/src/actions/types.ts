import { DeleteTodoAction, FetchTodosAction } from '.';

export type Action = FetchTodosAction | DeleteTodoAction;

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}
