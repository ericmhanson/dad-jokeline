import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    background: "linear-gradient(45deg, #1B1B1B 30%, #4D4C4C 90%)",
    border: 0,
  },
  title: {
    fontWeight: "bold",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Dad Jokeline
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
