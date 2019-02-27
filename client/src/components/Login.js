import * as React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Login (props) {

    return (
        <div className="login-form">
            <Typography component="h2" variant="h2" gutterBottom>
              Login
            </Typography>
            <form onSubmit={props.onSubmit}>
                <label>Username: </label>
                <input type="username" name="userName" value={props.values.userName} onChange={ props.onChange } />
                <label>Password : </label>
                <input type="password" name="password" value={props.values.password} onChange={ props.onChange } />
                <button type="submit">Login</button>
            </form>
            </div>)

} 