// Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';
export const ERROR_ON_SUBMIT = 'ERROR_ON_SUBMIT';

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

export const onSubmitError = submitError => ({
  type: ERROR_ON_SUBMIT,
  submitError,
});
