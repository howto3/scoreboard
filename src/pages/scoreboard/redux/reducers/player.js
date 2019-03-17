import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "../actionType";

const initialState = {
  title: "redux Store",
  players: [
    {name: "Kim", score: 60, id: 1},
    {name: "LEE", score: 60, id: 2},
    {name: "SEO", score: 60, id: 3},
    {name: "CHO", score: 60, id: 4}
  ]
};

export const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
    };
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            score: 60,
            id: state.players[state.players.length-1].id + 1
          }
        ]
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(item => item.id !== action.id)
      };
    case CHANGE_SCORE:
      const players = [...state.players];
      players.forEach((player) => {
        if (player.id === action.id) {
          if (action.act === "plus") {
            if (player.score > 95) alert("스코어는 100점이 최고입니다.");
            else player.score = player.score + action.delta;
          } else if(action.act === "minus") {
            if (player.score > 0) player.score = player.score - action.delta;
            else alert("스코어는 0점이 최저입니다.");
          }
        }
      });
      return {
        ...state,
        players
      };
    default:
      return state;
  }
};