import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Toolbar, { ToolbarProps } from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import { useDrawer } from "providers/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    maxHeight: 64
  },
  menuButton: {
    marginLeft: -12
  },
  content: {
    flex: 1,
    backgroundColor: theme.palette.background.default
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  grow: {
    flex: "1 1 auto"
  }
}));

export type MyAppBarProps = {
  title?: string;
  appBarProps?: AppBarProps;
  toolbarProps?: ToolbarProps;
} & WithWidth;

const MyAppBar = (props: PropsWithChildren<MyAppBarProps>) => {
  const { title, appBarProps, toolbarProps, width, children } = props;
  const classes = useStyles();
  const drawer = useDrawer();
  const smDown = isWidthDown("sm", width);

  const handleDrawerMenuClick = () => {
    drawer.setDrawerOpen(!drawer.open);
  };

  return (
    <AppBar
      color="default"
      className={
        ["xs", "sm"].indexOf(width) === -1
          ? clsx(classes.appBar, {
              [classes.appBarShift]:
                drawer.open && drawer.variant !== "temporary"
            })
          : classes.appBar
      }
      {...appBarProps}
    >
      <Toolbar {...toolbarProps}>
        <IconButton
          color="inherit"
          onClick={handleDrawerMenuClick}
          className={clsx(classes.menuButton, {
            [classes.hide]: drawer.open && !smDown
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default withWidth()(MyAppBar);
