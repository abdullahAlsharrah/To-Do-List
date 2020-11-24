import { Button } from "@material-ui/core";
import taskStore from "../../stores/tasksStore";
const DeleteButton = ({ taskId }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    taskStore.deleteTask(taskId);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
