import * as React from 'react'
import Typography from '@material-ui/core/Typography';

export default function SignIn (props) {
    return(<div>
            <Typography component="h2" variant="h2" gutterBottom>
              Sign in
            </Typography>
        <form onSubmit={props.onSubmit} >
            <label >Username: </label>
            <input type ='text' name="userName" value={props.values.userName} onChange={props.onChange}></input>
            <br/>
            <label>Email: </label>
            <input type ='email' name='email'value={props.values.email} onChange={props.onChange}></input>
            <br/>
            <label>Password: </label>
            <input type='password' name='password' value={props.values.password} onChange={props.onChange}></input>
            <br/>
            <label>Password confirmation: </label>
            <input type='password_confirmation' name='password_confirmation' value={props.values.password_confirmation} onChange={props.onChange}></input>
            <button type="submit">Submit</button>
            {
  					props.values.password &&
  					props.values.password_confirmation &&
  					props.values.password !== props.values.password_confirmation &&
  					<p style={{color:'red'}}>Passwords do not match</p>
  				}
        </form>

        
    </div>

    )

} 