import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, updateTodo,loadRemoteList } from "../actions";

const mapStateToProps = state => ({
  todolist: state.todolist
});

const mapDispatchToPros = dispatch => ({
  add: item => dispatch(addTodo(item)),
  toggle: id => dispatch(toggleTodo(id)),
  del: id => dispatch(deleteTodo(id)),
  update: item => dispatch(updateTodo(item)),
  loadList:()=> dispatch(loadRemoteList())
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToPros)(TodoList);

export default TodoListContainer;