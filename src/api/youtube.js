import axios from "axios";

const KEY = "AIzaSyBV21UjHnucHGp_mzFDyjcbY4Yr4gpho6E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
