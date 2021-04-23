import PropTypes from "prop-types";
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

export default function Header({ title }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header} id="header">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  title: 'Dad Jokeline'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}