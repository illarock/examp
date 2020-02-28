import React, { useState } from "react";
import "./Register.scss";
import {
  CssBaseline,
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Register = () => {
  const [gender, setGender] = useState("");
  const handleChange = event => {
    setGender(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleCheckbox = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="section register" fixed maxWidth="sm">
        <div className="form">
          <Typography variant="h4" component="h1" gutterBottom>
            Register here
          </Typography>
          <TextField className="input" label="Username" size="small" />
          <TextField
            className="input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
          />
          <TextField className="input" label="First Name" size="small" />
          <TextField className="input" label="Last Name" size="small" />
          <TextField className="input" label="Email" size="small" />
          <FormControl className="input" >
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel className="checkbox" 
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleCheckbox("checkedB")}
                value="checkedB"
                color="primary"
              />
            }
            label="Lorem ipsum dolor sit amet"
          />
          <Button
            className="button"
            variant="contained"
            size="large"
            color="secondary"
            component={Link}
            to="/Profile"
          >
            Register
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Register;
