import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import { CssBaseline, Container, Typography } from "@material-ui/core"
import './Profile.scss'

export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <Container className="profile" fixed maxWidth="md">
          <Typography variant="h6" gutterBottom>
            Profile Page
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Profile;
