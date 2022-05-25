

export const validatePost = values => {
    const errors = {};
    if (!values.newPost) {
      errors.newPost = 'error!';
    } else if (values.newPost.length > 50) {
      errors.newPost = 'Must be 50 characters or less!';
    }
    return errors;
};
export const validateLogin = values => {
  debugger
    const errors = {};
    if (!values.login) {
      errors.login = 'Login Request!';
    } else if (values.login.length > 30) {
      errors.login = 'Must be 30 characters or less';
    }
  
    if (!values.passoword) {
      errors.passoword = 'Password Request!';
    } else if (values.passoword.length > 20) {
      errors.passoword = 'Must be 20 characters or less';
    }
    return errors;
};