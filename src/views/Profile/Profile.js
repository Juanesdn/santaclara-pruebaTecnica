import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import { getUserInfo } from "../../actions";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return user ? (
    <Container maxWidth="lg" component="main">
      <Typography variant="h3" gutterBottom>
        Usuario: {user.username}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Nombre: {user.first_name}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Apellido: {user.last_name}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Correo: {user.username}
      </Typography>
    </Container>
  ) : (
    <CircularProgress
      size={40}
      left={-20}
      top={10}
      status={"loading"}
      style={{
        marginLeft: "50%",
        marginTop: 20,
      }}
    />
  );
};

export default Profile;
