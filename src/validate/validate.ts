import { ProfileContactsType } from "../api/api-dal"

type validateType<T> = (values: T) => {}

type validatePostType = {
  newPost: string
}
type errorsPostType = {
  newPost?: string
}

export const validatePost:validateType<validatePostType> = (values) => {
  const errors: errorsPostType = {};
  if (!values.newPost) {
    errors.newPost = 'error!';
  } else if (values.newPost.length > 50) {
    errors.newPost = 'Must be 50 characters or less!';
  }
  return errors;
};

type validateLoginType = {
  captcha: string
  login: string
  passoword: string
  remebmerMe: boolean
}
type errorsLoginType = {
  login?: string
  passoword?: string
}
export const validateLogin: validateType<validateLoginType> = (values) => {
  const errors: errorsLoginType = {};
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
type validateProfileType = {
  aboutMe: string
  fullName: string
  lookingForAJobDescription: string
  contacts: ProfileContactsType
}
type errorsProfileType = {
  aboutMe?: string
  fullName?: string
  lookingForAJobDescription?: string
  someUrlIsWrong?: string
}
export const validateProfile:validateType<validateProfileType> =  (values) => {
  const errors: errorsProfileType = {};
  if (values.aboutMe.length > 65) {
    errors.aboutMe = 'Must be 65 characters or less';
  }
  if (values.fullName.length > 30) {
    errors.fullName = 'Must be 30 characters or less';
  }
  if (values.lookingForAJobDescription.length > 50) {
    errors.lookingForAJobDescription = 'Must be 50 characters or less';
  }
  const bigURL = Object.values(values.contacts).filter((item: any) => item.length > 50)
  if (bigURL.length > 0) {
    errors.someUrlIsWrong = `Some URL (${bigURL}) Is Wrong`
  }

  return errors;
};