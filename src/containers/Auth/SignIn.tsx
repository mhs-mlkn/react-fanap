import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import InputIcon from "@material-ui/icons/Input";
import Button from "components/Button";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%"
    }
  })
);

const SignIn = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

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
            onClick={() => setLoading(!loading)}
          >
            برای ادامه کنید
          </Button>
        </Slide>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="body1" color="error">
          ورود ناموفق بود، دوباره تلاش کنید
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignIn;
