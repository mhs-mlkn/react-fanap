import React, { PropsWithChildren } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button, { ButtonProps as MuiButonProps } from "@material-ui/core/Button";

const useStyles = makeStyles(
  createStyles({
    startIcon: {
      marginRight: -4,
      marginLeft: 8
    }
  })
);

export interface ButtonProps extends MuiButonProps {
  loading?: boolean;
}

const LoadingButton = React.forwardRef<any, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const classes = useStyles();
    const {
      loading = false,
      startIcon = null,
      children,
      ...buttonProps
    } = props;

    const Loading = <CircularProgress size={24} />;

    return (
      <Button
        {...buttonProps}
        ref={ref}
        startIcon={loading ? Loading : startIcon}
        disabled={loading}
        classes={{ startIcon: classes.startIcon }}
      >
        {children}
      </Button>
    );
  }
);

export default LoadingButton;
