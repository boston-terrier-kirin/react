import { MODAL_ACTION_TYPES } from './modal.types';

const initialState = {
  isOpen: false,
  entry: null,
};

export const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPES.EDIT_ENTRY_START:
    case MODAL_ACTION_TYPES.EDIT_ENTRY_END:
      return {
        ...state,
        isOpen: payload.open,
        entry: payload.entry,
      };

    default:
      return state;
  }
};
