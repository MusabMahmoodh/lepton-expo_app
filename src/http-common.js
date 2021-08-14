import axios from "axios";
import { laptonApi } from "./api/api";
export default axios.create({
  // baseURL: "http://localhost:5001/api",
  baseURL: `${laptonApi}/teacher`,
  headers: {
    "Content-type": "application/json",
  },
});
