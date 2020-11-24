import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "absolute",
    width: "80vw",
    // left: 0,
    zIndex: 100,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert
        iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}
      >
        Task added!
      </Alert>
    </div>
  );
}
