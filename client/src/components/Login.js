import * as React from 'react'

export default function Login (props) {

    return (
        <div className="login-form">
            <form onSubmit={props.onSubmit}>
                <label>Username: </label>
                <input type="username" name="userName" value={props.values.userName} onChange={ props.onChange } />
                <label>Password : </label>
                <input type="password" name="password" value={props.values.password} onChange={ props.onChange } />
                <button type="submit">Login</button>
            </form>
            </div>)

} 