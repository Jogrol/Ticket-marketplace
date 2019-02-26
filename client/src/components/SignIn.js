import * as React from 'react'

export default function SignIn (props) {
    return(<div>
        <h1>Sign in:</h1>
        <form onSubmit={props.onSubmit} >
            <label >Username: </label>
            <input type ='text' name="userName" value={props.values.userName} onChange={props.onChange}></input>
            <br/>
            <label>Email: </label>
            <input type ='email' name='email'value={props.values.email} onChange={props.onChange}></input>
            <br/>
            <label>Password: </label>
            <textarea type='password' name='password' value={props.values.password} onChange={props.onChange}></textarea>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>

    )

} 