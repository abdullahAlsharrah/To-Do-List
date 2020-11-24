import React from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "./BannerAlert";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
}));

export default function SlideAlert({ checked, setChecked }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <Banner />
          </Paper>
        </Slide>
      </div>
    </div>
  );
}
