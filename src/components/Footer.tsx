import React, { ComponentType } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

const Footer = ({ component: Component }: { component: ComponentType }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Component />
      </Container>
    </footer>
  );
};

export default Footer;
