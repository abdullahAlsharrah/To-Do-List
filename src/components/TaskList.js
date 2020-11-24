import tasks from "../data/Tasks";
import TaskItem from "./TaskItem";
import Grid from "@material-ui/core/Grid";

const TaskList = () => {
  return (
    <Grid container spacing={5}>
      <Grid item>
        {tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </Grid>
    </Grid>
  );
};
export default TaskList;
