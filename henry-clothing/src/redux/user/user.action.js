
export const googleSignInStart = () =>{
  return {
    type: "GOOGLE_SIGN_IN_START"
  }
}
export const googleSignInSuccess = (user) =>{
  return {
    type: "GOOGLE_SIGN_IN_SUCCESS",
    payload: user
  }
}
export const googleSignInFailure= (error) =>{
  return {
    type: "GOOGLE_SIGN_IN_FAILURE",
    payload: error.message
  }
}
export const emailSignInStart = (emailAndPassword) =>{
  return {
    type: "EMAIL_SIGN_IN_START",
    payload: emailAndPassword
  }
}
export const emailSignInSuccess = (user) =>{
  return {
    type: "EMAIL_SIGN_IN_SUCCESS",
    payload: user
  }
}
export const emailSignInFailure= (error) =>{
  return {
    type: "EMAIL_SIGN_IN_FAILURE",
    payload: error.message
  }
}

export const checkUserSession = () => {
  return {
    type: "CHECK_USER_SESSION"
  }
}