import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignUp = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("err while calling signup");
  }
};
