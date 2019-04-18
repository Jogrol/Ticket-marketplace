import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const USER_SIGNIN_SUCCESFULL = "USER_SIGIN_SUCCESFULL"
export const USER_SIGNIN_FAILED = 'USER_SIGIN_FAILED'
export const USER_LOGIN_SUCCESFULL = "USER_LOGIN_SUCCESFULL"
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'


const userSignInSuccess = () => ({
    type: USER_SIGNIN_SUCCESFULL
})

const userSignInFailed = (message) => ({
    type: USER_SIGNIN_FAILED,
    payload: message
})

const userLoginSuccess = (JWT) => ({
    type: USER_LOGIN_SUCCESFULL,
    payload: JWT
})

export const userLogOut = () => ({
    type: USER_LOGOUT,
})

const userLoginFailed = (message) => ({
    type: USER_LOGIN_FAILED,
    payload: message
})

export const sendSignInToDB = (data) => (dispatch) => {
    request
        .post(`${baseUrl}/users`)
        .send({
            userName: data.userName,
            email: data.email,
            password: data.password
        })
        .then(result => {
            dispatch(userSignInSuccess(result))
        })
        .catch(err => {
            if (err.status === 400) {
                console.log(err.response)
                dispatch(userSignInFailed(err.response.body.message))
            } else {
                console.error(err)
            }
        })
}

export const login = (data) => (dispatch) => {
    request
        .post(`${baseUrl}/logins`)
        .send({
            userName: data.userName,
            password: data.password
        })
        .then(result => dispatch(userLoginSuccess(result.body)))
        .catch(err => {
            if (err.status === 400) {
                dispatch(userLoginFailed(err.response.body.message))
            } else {
                console.error(err)
            }
        })
}