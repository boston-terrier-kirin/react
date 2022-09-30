export const selectIsOpen = (state) => {
  return state.modal.isOpen;
};

export const selectEntryToUpdate = (state) => {
  return state.modal.entry;
};
