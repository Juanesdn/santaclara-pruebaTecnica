import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  makeStyles,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "../../components";
import { Redirect } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useSelector, useDispatch } from "react-redux";
import {
  usernameChanged,
  passwordChanged,
  loginUser,
  removeErrorMsg,
} from "../../actions";

/* Estilos */
const useStyles = makeStyles((theme) => ({
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -10,
    marginLeft: -12,
  },
}));

const SignIn = () => {
  const { username, password, error, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const isLoggedIn = localStorage.getItem("key") ? true : false;

  const classes = useStyles();

  const onUsernameChange = (e) => {
    const text = e.target.value;
    dispatch(usernameChanged(text));
  };

  const onPasswordChange = (e) => {
    const pwd = e.target.value;
    dispatch(passwordChanged(pwd));
  };

  const onButtonPress = () => {
    dispatch(loginUser({ username, password }));
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(removeErrorMsg(false));
  };

  return isLoggedIn ? (
    <Redirect to="/home" />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            value={username || ""}
            autoComplete="username"
            autoFocus
            onChange={onUsernameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={password || ""}
            autoComplete="current-password"
            onChange={onPasswordChange}
          />
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onButtonPress}
              disabled={loading}
            >
              Sign In
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </div>
      </div>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error">
          El usuario o la contraseña son erroneos
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignIn;
