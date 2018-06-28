import React from "react";
import { StackNavigator } from "react-navigation";

import TodoList from "./src/containers/TodoList";
import AddTodo from "./src/components/AddTodo";
import { createStore,applyMiddleware } from "redux";
import todolistReducer from "./src/reducers";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as firebase from "firebase";

const store = createStore(todolistReducer,applyMiddleware(logger,thunk));

var config = {
    apiKey: "AIzaSyDyunNWIxXkNpEREPsqtWr5GNRTbFSJrfs",
    authDomain: "checklist-d6f86.firebaseapp.com",
    databaseURL: "https://checklist-d6f86.firebaseio.com",
    projectId: "checklist-d6f86",
    storageBucket: "checklist-d6f86.appspot.com",
    messagingSenderId: "352125592812"
  };
  firebase.initializeApp(config);

const MainNav = StackNavigator(
  {
    TodoList: {
      screen: TodoList
    },
    AddTodo: {
      screen: AddTodo
    }
  },
  {
    initialRouteName: "TodoList",
    mode: "modal"
  }
);

const App = () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
);
//
export default App;