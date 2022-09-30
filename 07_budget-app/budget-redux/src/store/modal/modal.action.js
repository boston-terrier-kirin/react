import { MODAL_ACTION_TYPES } from './modal.types';

export const editEntryStart = (open, entry) => {
  return {
    type: MODAL_ACTION_TYPES.EDIT_ENTRY_START,
    payload: { open, entry },
  };
};

export const editEntryEnd = (open, entry) => {
  return {
    type: MODAL_ACTION_TYPES.EDIT_ENTRY_END,
    payload: { open, entry },
  };
};
