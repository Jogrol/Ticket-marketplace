import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import { Button, TextField, CardContent, Card } from '@material-ui/core';

export default function SignIn (props) {
    return(
      <div>
        <Card>
          <CardContent>
          <Typography component="h3" variant="h3" gutterBottom>
              Register
            </Typography>
              <form onSubmit={props.onSubmit} >
              <TextField
                  id="outlined-with-placeholder"
                  label="Username"
                  placeholder="Username"
                  name="userName" value={props.values.userName}
                  onChange={props.onChange}
                  margin="normal"
                  variant="outlined"
              />
              <br/>
              <TextField
                  id="outlined-with-placeholder"
                  label="Email"
                  placeholder="Email"
                  name="email" value={props.values.email}
                  onChange={props.onChange}
                  margin="normal"
                  variant="outlined"
              />
                  <br/>
              <TextField
                  id="outlined-with-placeholder"
                  label="Password"
                  type='password'
                  placeholder="Password"
                  name="password" value={props.values.password}
                  onChange={props.onChange}
                  margin="normal"
                  variant="outlined"
              />
                  <br/>
              <TextField
                  id="outlined-with-placeholder"
                  label="Password confirmation"
                  type='password'
                  placeholder="Password confirmation"
                  name="password_confirmation" value={props.values.password_confirmation}
                  onChange={props.onChange}
                  margin="normal"
                  variant="outlined"
              />
                { props.values.password &&
                  props.values.password_confirmation &&
                  props.values.password  !== props.values.password_confirmation &&
                  <Typography component="p">
                  These passwords should match!
                </Typography>}
                <br/>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
          </CardContent>
      </Card>
    </div>
    )

} 