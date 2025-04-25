import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  type: string | null;
  props: Record<string, unknown>;
}

const initialState: ModalState = {
  isOpen: false,
  type: null,
  props: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: string; props?: Record<string, unknown> }>
    ) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.props = action.payload.props || {};
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
      state.props = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
