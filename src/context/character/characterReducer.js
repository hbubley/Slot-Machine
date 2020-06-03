import {
    SELECT_CHARACTER
  } from "../types";
  
  export default (state, action) => {
      switch(action.type){
          case SELECT_CHARACTER:
              return {
                  
              }
          default:
              return state;
      }
  }