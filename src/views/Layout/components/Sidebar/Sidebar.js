import React, { Fragment } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { userLogout } from "../../../../actions";
import { useDispatch } from "react-redux";

const DRAWER_WIDTH = 240;

const styles = (theme) => ({
  flex: {
    flex: 1,
  },
  drawerPaper: {
    position: "relative",
    width: DRAWER_WIDTH,
  },
  toolbarMargin: theme.mixins.toolbar,
});

const Sidebar = ({ classes, variant, open, onClose, setSidebar, sidebar }) => {
  const user = localStorage.getItem("key") ? true : false;
  const dispatch = useDispatch();

  const Logout = () => {
    handleClick();
    dispatch(userLogout());
  };

  const handleClick = () => {
    setSidebar(variant === "temporary" ? false : sidebar);
    setSidebar(!sidebar);
  };

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === "persistent",
        })}
      />
      <List>
        {user ? (
          <Fragment>
            <ListItem
              button
              component={Link}
              to="/profile"
              onClick={handleClick}
            >
              <ListItemText>Perfil</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/home" onClick={handleClick}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/rules" onClick={handleClick}>
              <ListItemText>Rules</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/" onClick={Logout}>
              <ListItemText>Cerrar Sesión</ListItemText>
            </ListItem>
          </Fragment>
        ) : (
          <ListItem button component={Link} to="/" onClick={handleClick}>
            <ListItemText>Iniciar Sesión</ListItemText>
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
