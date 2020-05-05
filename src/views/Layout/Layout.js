import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Menubar, Sidebar } from "./components";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Layout = ({ variant }) => {
  const [sidebar, setSidebar] = useState(false);
  const classes = styles();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={classes.root}>
      <Menubar onMenuClick={toggleSidebar} />
      <Sidebar
        open={sidebar}
        onClose={toggleSidebar}
        setSidebar={setSidebar}
        variant={variant}
        sidebar={sidebar}
      />
    </div>
  );
};

export default Layout;
