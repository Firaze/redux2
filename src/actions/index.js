import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO,LOAD_REMOTE_LIST } from "./types";
import * as firebase from "firebase";
export const addTodo = item => ({
  type: ADD_TODO,
  item
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const updateTodo = item => ({
  type: UPDATE_TODO,
  item
});

const loadFromFirebase=(dispatch)=>{
  var uid="KYb3tqzRRcgdNOqxfj5mMLPMCyf2";
  firebase.database().ref("/users/"+uid+"/todolist").once("value").then(snap=>{
    dispatch({type: LOAD_REMOTE_LIST, todolist: snap.val()});
  })
}

export const loadRemoteList=()=> loadFromFirebase;