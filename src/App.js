import "./App.css";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.paper}>
      <Typography variant="h3" align="center">
        To do List
      </Typography>
      <NewTaskForm />
      <TaskList />
    </Grid>
  );
}

export default App;
