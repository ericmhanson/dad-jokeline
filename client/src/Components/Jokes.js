import React, { useState, useEffect } from "react";
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
  cardhead: {
    backgroundColor: '#1B1B1B',
    color: 'white'
  },
  jokes: {
    margin: "auto",
    marginTop: "10rem",
    width: "50vw",
    backgroundColor: '#1B1B1B',
    boxShadow: '5px 5px 8px, -3px -3px 8px'
  },
  jokespace: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: "75%",
    width: "75%",
    background: "rgba(83, 35, 25, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '1rem'
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  next: {
    width: '100%',
    color: 'white',
    backgroundColor: '#4D4C4C'
  }
});

const Jokes = () => {
  const classes = useStyles();
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const getJoke = async () => {
      const jokeFromApi = await fetchJoke();
      setJoke(jokeFromApi.joke);
    };

    getJoke();
  }, []);

  const fetchJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  const updateJoke = async () => {
    const newJoke = await fetchJoke();
    setJoke(newJoke.joke);
  };

  return (
    <Card className={classes.jokes}>
      <CardHeader className={classes.cardhead} title="Let's See A Joke!" />
      <CardContent className={classes.jokespace}>
        <Box className={classes.box}>
          <Typography className={classes.text} variant="overline">
            {joke}
          </Typography>
        </Box>
      </CardContent>
      <Button className={classes.next} color="primary" onClick={updateJoke}>
        Next!
      </Button>
    </Card>
  );
};

export default Jokes;
