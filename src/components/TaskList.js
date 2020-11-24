import taskStore from "../stores/tasksStore";
import TaskItem from "./TaskItem";
import Grid from "@material-ui/core/Grid";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";
import { useState } from "react";

const TaskList = () => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);
  const handleHideDoneTasks = (e) => {
    setShowCompletedTasks((prev) => !prev);
  };
  const filterDoneTasks = (task) => showCompletedTasks || !task.done;
  return (
    <>
      {/* <Grid container spacing={5}> */}

      <Grid item>
        {[...taskStore.tasks]
          .sort((task) => (task.done ? 1 : -1))
          .filter(filterDoneTasks)
          .map((task) => (
            <TaskItem task={task} />
          ))}
        <Button onClick={handleHideDoneTasks}>
          {showCompletedTasks ? "Hide " : "Show "}completed tasks
        </Button>
      </Grid>
      {/* </Grid> */}
    </>
  );
};
export default observer(TaskList);
