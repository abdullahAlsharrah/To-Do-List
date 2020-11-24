import taskStore from "../stores/tasksStore";
import React, { useState } from "react";
import TaskField from "./inputs/TaskField";
import { Button, Grid } from "@material-ui/core";
const NewTaskForm = () => {
  // states
  const [task, setTask] = useState("");

  // handlers
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleAddingTask = () => {
    taskStore.creatTask({ title: task });
    setTask("");
  };

  return (
    <Grid container>
      <Grid item xs={10}>
        <TaskField
          value={task}
          onChange={handleTaskChange}
          onTapEnter={handleAddingTask}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleAddingTask} variant="contained" color="primary">
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewTaskForm;
