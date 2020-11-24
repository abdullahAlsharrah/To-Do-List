import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      // createTask: action,
      deleteTask: action,
      fetchTasks: action,
    });
  }

  fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost");
      this.tasks = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  //   creatTask = async (newTask) => {
  //     try {
  //       const res = await axios.post("http://localhost", newTask);
  //       this.tasks.push(res.data);
  //     } catch (error) {}
  //   };

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost/`, taskId);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    } catch (error) {
      console.log(error);
    }
  };
}
const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
