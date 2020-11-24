import taskStore from "../stores/tasksStore";
import React, { useEffect, useState } from "react";
import TaskField from "./inputs/TaskField";
import { Button, Grid } from "@material-ui/core";
import SlideAlert from "./Alert/AlertAnimation";
const NewTaskForm = () => {
  // states
  const [task, setTask] = useState("");
  const [checked, setChecked] = useState(false);
  // handlers
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleAddingTask = () => {
    setChecked(true);
    taskStore.creatTask({ title: task });

    setTask("");
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setChecked(false);
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [checked]);

  return (
    <div>
      <Grid container>
        <Grid item xs={10}>
          <TaskField
            value={task}
            onChange={handleTaskChange}
            onTapEnter={handleAddingTask}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={handleAddingTask}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Grid>
      </Grid>
      {/* <SlideAlert
        style={{ position: "absolute", bottom: 50 }}
        checked={checked}
        setChecked={setChecked}
      /> */}
    </div>
  );
};

export default NewTaskForm;
