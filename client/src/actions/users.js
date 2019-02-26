import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const sendSignInToDB = (data) => (dispatch) => {
console.log('send to DB', data)
	request
		.post(`${baseUrl}/users`)
        .send({ userName: data.userName, 
                email: data.email,
                password: data.password })
		// .then(result => {
		// 	dispatch(userSignInSuccess())
		// })
		.catch(err => {
			if (err.status === 400) {
				// dispatch(userSignInFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
        })
    }
