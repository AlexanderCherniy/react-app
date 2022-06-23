

export const validatePost = (values: any) => {
    const errors:any = {};
    if (!values.newPost) {
      errors.newPost = 'error!';
    } else if (values.newPost.length > 50) {
      errors.newPost = 'Must be 50 characters or less!';
    }
    return errors;
};

export const validateLogin = (values:any) => {
    const errors:any = {};
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

export const validateProfile = ()=> (values:any) => {
    const errors:any = {};
    if (values.aboutMe.length > 65) {
      errors.aboutMe = 'Must be 65 characters or less';
    }
    if (values.fullName.length > 30) {
      errors.fullName = 'Must be 30 characters or less';
    }
    if (values.lookingForAJobDescription.length > 50) {
      errors.lookingForAJobDescription = 'Must be 50 characters or less';
    }
    const bigURL = Object.values(values.contacts).filter((item:any) => item.length > 50)
    if(bigURL.length > 0){
      errors.someUrlIsWrong = `Some URL (${bigURL}) Is Wrong`
    }

    return errors;
};