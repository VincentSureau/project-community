// Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';
export const ERROR_ON_SUBMIT = 'ERROR_ON_SUBMIT';
export const TOGGLE_POPOVER = 'TOGGLE_POPOVER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const MESSAGE_FORGOT_PASSWORD = 'MESSAGE_FORGOT_PASSWORD';

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

export const tooglePopover = popover => ({
  type: TOGGLE_POPOVER,
  popover,
});

export const forgottenPassword = email => ({
  type: FORGOT_PASSWORD,
  email,
});

export const messageForgotPassword = response => ({
  type: MESSAGE_FORGOT_PASSWORD,
  response,
});
