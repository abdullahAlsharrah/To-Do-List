import taskStore from "../../stores/tasksStore";
const DeleteButton = ({ taskId }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    taskStore.deleteTask(taskId);
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteButton;
