import React, { Component } from "react"
import "./Login.scss"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import { TextField, Typography, Button, Avatar } from "@material-ui/core"
import { Link } from "react-router-dom"

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className="section login" fixed maxWidth="sm">
          <div className="form">
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome
            </Typography>
            <Avatar className="avatar" alt="" src="/images/witcher.jpg" />
            <TextField className="input" label="Username" size="small" />
            <TextField
              className="input"
              label="Password"
              type="password"
              autoComplete="current-password"
              size="small"
            />
            <Button
              className="button"
              variant="contained"
              size="large"
              color="secondary"
              component={Link}
              to="/Profile"
            >
              Login
            </Button>

            <Typography class="signup" variant="caption" display="block" gutterBottom>
              Not yet a member? <Link to="/register" color="secondary">sign up now</Link>
            </Typography>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
