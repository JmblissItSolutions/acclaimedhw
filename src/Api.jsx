import axios from "axios";

const instance = axios.create({

  baseURL: "https://replatform.acclaimedhw.com/replatform"
});

export default instance;