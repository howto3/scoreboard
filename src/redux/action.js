import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionType";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
});

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
});

export const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  id
});

export const changeScore = (act, id, delta) => ({
  type: CHANGE_SCORE,
  act,
  id,
  delta
});