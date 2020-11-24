import { useState } from "react";
import PriorityTag from "./PriorityTag";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const TaskItem = ({ task }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(task.done);
  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Checkbox checked={checked} onChange={handleCheck}></Checkbox>
          </Grid>
          <Grid item xs>
            <Typography>{task.title}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TaskItem;
