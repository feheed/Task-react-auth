import { makeAutoObservable } from "mobx";
import api from "./api";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  signUp = async (user) => {
    try {
      const response = await api.post("/signup", user);
      this.user = response.data;
    } catch (error) {
      alert(error);
    }
  };
}
const authStore = new AuthStore();
export default authStore;
