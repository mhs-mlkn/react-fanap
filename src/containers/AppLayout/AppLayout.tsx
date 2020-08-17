import "react-toastify/dist/ReactToastify.css";
import React, { ComponentType } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, Slide } from "react-toastify";
import Routes from "containers/Routes";
import { useAppConfig } from "providers/Config";
import Analytics from "components/Analytics";

const DrawerAsync = React.lazy(() => import("containers/Drawer"));
const AppBarAsync = React.lazy(() => import("containers/AppBar"));
const FooterAsync = React.lazy<ComponentType<any>>(() =>
  import("components/Footer")
);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100vh"
  },
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  offset: { ...theme.mixins.toolbar },
  content: {
    width: "100%",
    height: "100vh",
    padding: theme.spacing()
  },
  footer: {
    padding: theme.spacing(),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

export const AppLayout = () => {
  const classes = useStyles();
  const appConfig = useAppConfig();
  const {
    panelRoutes,
    components = {},
    drawer,
    displayAppBar = true
  } = appConfig;
  const { Footer } = components;

  return (
    <div className={classes.root}>
      {drawer.display && <DrawerAsync />}
      {displayAppBar && <AppBarAsync />}
      <div className={classes.body}>
        <div className={classes.content}>
          {displayAppBar && <div className={classes.offset} />}
          <Routes routes={panelRoutes} />
        </div>
        {Footer && <FooterAsync component={Footer} />}
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        transition={Slide}
        rtl={true}
      />
      {appConfig.analyticsProps && <Analytics {...appConfig.analyticsProps} />}
    </div>
  );
};

export default AppLayout;
