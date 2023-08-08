import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { gameActions } from "src/store/game/game.slice";

const actions = {
  ...gameActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
