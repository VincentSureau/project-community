// Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';

// Action creator
export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const changeInputForm = (name, value) => ({
  type: CHANGE_INPUT_FORM,
  name,
  value,
});
