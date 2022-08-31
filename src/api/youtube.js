import axios from "axios";

// const KEY = "AIzaSyA7PyZB2ZFAAZmVu1mRWWfTKeSwUx8Uio0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: "AIzaSyAC1AHv-TW3RWxITzgJEQLmJxth5WlXPhI",
  },
});
