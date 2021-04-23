import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

const useStyles = makeStyles({
  register: {
    width: "40vw",
    backgroundColor: "#1B1B1B",
    margin: "auto",
    marginTop: "10rem",
    boxShadow: "5px 5px 8px, -3px -3px 8px",
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
    <Card className={classes.register}>
      <CardContent>
        <Typography variant="h4" className={classes.title}>
          Register
        </Typography>
        <form className={classes.root}>
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
    </Card>
  );
};

export default RegisterModal;
