import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./game/game.slice";
export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
