import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  FilledInput,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

const useStyles = makeStyles({
  card: {
    width: "40vw",
    backgroundColor: "grey",
    margin: "auto",
    marginTop: "10rem",
    boxShadow: "5px 5px 8px, -3px -3px 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  register: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "white",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

function RegisterModal(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: "",
    username: "",
    password: "",
    showPassword: false,
    msg: null,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" className={classes.title}>
          Register
        </Typography>
        <ThemeProvider theme={theme}>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <FilledInput
              id="name"
              type="name"
              onChange={handleChange("name")}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="username">Username</InputLabel>
            <FilledInput
              id="username"
              type="username"
              onChange={handleChange("username")}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              onChange={handleChange("password")}
              value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </ThemeProvider>
      </CardContent>
      <CardActions>
        <Button>Register</Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
