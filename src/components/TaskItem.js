import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import DeleteButton from "./buttons/DeleteButton";
import taskStore from "../stores/tasksStore";

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

  const handleCheck = (e) => {
    taskStore.updateTaskDone(task.id);
  };
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Checkbox checked={task.done} onChange={handleCheck}></Checkbox>
          </Grid>
          <Grid item xs>
            <Typography
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.title}
            </Typography>
          </Grid>
          <Grid item>
            <DeleteButton taskId={task.id} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TaskItem;
