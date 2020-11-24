import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import taskStore from "../../stores/tasksStore";
const DeleteButton = ({ taskId }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    taskStore.deleteTask(taskId);
  };
  return (
    <div>
      <Button>
        <ClearIcon
          rIcon
          variant="contained"
          color="secondary"
          onClick={handleDelete}
        >
          Delete
        </ClearIcon>
      </Button>
    </div>
  );
};

export default DeleteButton;
