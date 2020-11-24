import { makeAutoObservable } from "mobx";
import axios from "axios";

const url = "http://localhost/";
class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTasks = async () => {
    try {
      const response = await axios.get(url);
      this.tasks = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  creatTask = async (newTask) => {
    try {
      const res = await axios.post(url, newTask);
      this.tasks.push(res.data);
    } catch (error) {}
  };

  deleteTask = async (taskId) => {
    try {
      let path = url + taskId;
      console.log("PATH", path);
      await axios.delete(path);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    } catch (error) {
      console.log("Generated Error while deleting:", error);
    }
  };
  updateTaskDone = async (taskId) => {
    try {
      let path = url + taskId;
      console.log("PATH", path);
      const response = await axios.put(path);
      // const foundTask = this.tasks.find((task) => task.id === +taskId);
      console.log("Tasks:", this.tasks);
      this.fetchTasks();
    } catch (error) {
      console.log("Generated Error while updating:", error);
    }
  };
}
const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
