import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import background from "../brick.jpg";

const useStyles = makeStyles({
  jokes: {
    margin: "auto",
    marginTop: "10rem",
    width: "500px",
  },
  jokespace: {
    backgroundImage: `url(${background})`,
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: "200px",
    width: "350px",
    background: "#532319",
    opacity: "0.7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});

const Jokes = () => {
  const classes = useStyles();
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();

    setJoke(data.joke);
  };

  return (
    <Card className={classes.jokes}>
      <CardHeader title="Let's See A Joke!" />
      <CardContent className={classes.jokespace}>
        <Box className={classes.box}>
          <Typography className={classes.text} variant="overline">
            {joke}
          </Typography>
        </Box>
      </CardContent>
      <Button color="primary" onClick={getJoke}>
        Get Joke
      </Button>
    </Card>
  );
};

export default Jokes;
