import * as actions from "./actionTypes";

export const increment = () => {
  return {
    type: actions.increment,
  };
};

export const decrement = () => {
  return {
    type: actions.decrement,
  };
};

export const auth = () => {
  return {
    type: actions.auth,
  };
};
