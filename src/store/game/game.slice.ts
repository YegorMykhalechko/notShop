import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstrumental } from "src/models";

interface GameState {
  instrumental: IInstrumental | null;
}

const initialState: GameState = {
  instrumental: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setInstrumental(state, action: PayloadAction<IInstrumental>) {
      state.instrumental = action.payload;
    },
    // addInstrumental(state, action: PayloadAction<string>) {
    //   state.instrumentals.push(action.payload);
    // },
    // removeInstrumental(state, action: PayloadAction<String>) {
    //   state.instrumentals.filter((i) => i !== action.payload);
    // },
  },
});

export const gameActions = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
