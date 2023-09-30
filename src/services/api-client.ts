import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3b3f5da400304249ac3bcab9edd56acd",
  },
});
