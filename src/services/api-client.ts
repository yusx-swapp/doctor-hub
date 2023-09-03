import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "49d8c010f9344f379fe324dc27a53b61",
  },
});
