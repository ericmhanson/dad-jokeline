import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Button
} from "@material-ui/core";

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
      }
  },
});

const RegisterModal = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" className={classes.title}>
          Register
        </Typography>
        <form className={classes.register}>
          <ThemeProvider theme={theme}>
            <TextField
              id="name"
              label="Name"
              variant="filled"
            />
            <TextField id="username" label="Username" variant="filled" />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="filled"
            />
          </ThemeProvider>
        </form>
      </CardContent>
      <CardActions>
        <Button>Register</Button>
      </CardActions>
    </Card>
  );
};

export default RegisterModal;
