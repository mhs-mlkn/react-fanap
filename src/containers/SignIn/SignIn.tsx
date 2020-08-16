import React, { useState, useEffect } from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import InputIcon from "@material-ui/icons/Input";
import Button from "components/Button";
import { parseQueryString } from "utils";
import { useAuth } from "providers/Auth";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%"
  }
});

const SignIn = (props: RouteComponentProps) => {
  const classes = useStyles();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    async function fetchToken(ssoCode: string) {
      try {
        setLoading(true);
        await auth.fetchToken(ssoCode);
      } catch (err) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    const { code = "", state = "/" } = parseQueryString(
      window.location.search.slice(1)
    );
    if (!!code) {
      fetchToken(code).then(() => {
        setRedirect(decodeURIComponent(state) || "/");
      });
    }
  }, [auth, error]);

  const handleClick = () => {
    setLoading(true);
    const { from = "/" } = parseQueryString(window.location.search.slice(1));
    window.location.href = auth.getLoginUrl(from);
  };

  if (!!redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.root}
    >
      <Grid item>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Button
            loading={loading}
            variant="contained"
            color="primary"
            startIcon={<InputIcon />}
            onClick={handleClick}
          >
            برای ادامه کنید
          </Button>
        </Slide>
      </Grid>
      {error && (
        <Grid item>
          <Typography gutterBottom variant="body1" color="error">
            ورود ناموفق بود، دوباره تلاش کنید
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SignIn;
