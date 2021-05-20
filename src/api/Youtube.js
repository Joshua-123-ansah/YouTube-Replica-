import axios from "axios";

const KEY = "AIzaSyB8R73WZS9Q2vjCmy9TlhopU3RwZb4bHxY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});


















