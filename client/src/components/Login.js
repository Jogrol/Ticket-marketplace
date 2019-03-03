import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import { Button, TextField, CardContent, Card } from '@material-ui/core';

export default function Login (props) {

    return (
        
        <div>
            <Card>
            <CardContent>
            <Typography component="h3" variant="h3" gutterBottom>
              Login
            </Typography>
            <form onSubmit={props.onSubmit}>
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
                label="Password"
                type='password'
                placeholder="Password"
                name="password" value={props.values.password}
                onChange={props.onChange}
                margin="normal"
                variant="outlined"
            />
            <br/>
                <Button type="submit" variant="contained">
                Submit
                </Button>
            </form>
            <br/>
            <Typography  stylecomponent="p">
            {props.errorMessage}
            </Typography>
            </CardContent>
             </Card>

            </div>)

} 