import taskStore from "../stores/tasksStore";
import TaskItem from "./TaskItem";
import Grid from "@material-ui/core/Grid";
import { observer } from "mobx-react";

const TaskList = () => {
  return (
    <>
      {/* <Grid container spacing={5}> */}
      <Grid item>
        {taskStore.tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </Grid>
      {/* </Grid> */}
    </>
  );
};
export default observer(TaskList);
