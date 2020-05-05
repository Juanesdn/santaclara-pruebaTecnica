import React from "react";
import { Container, Typography } from "@material-ui/core";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return (
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
  );
};

export default Profile;
