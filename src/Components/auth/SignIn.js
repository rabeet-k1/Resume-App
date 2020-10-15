import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import firebase from "../../Config/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { store } from "../../store/store";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(signin-image.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const SignIn = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const state = store.getState().userDetails;
    // store.subscribe(() => {
    //   console.log(state);
    // });
    setUser(state.user);
  }, []);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  const classes = useStyles();

  if (user) return <Redirect to="/" />;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Grid>
    </Grid>
  );
};
export default SignIn;
