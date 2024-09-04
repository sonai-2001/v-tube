const API_KEY = "AIzaSyCesv97hzna_YZgjTRhe-TJHkYHdyPpVe0";
export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=27&key=" +
  API_KEY;

export const SINGLE_VIDEO_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";
export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";
export const VIDEO_URL = "https://www.youtube.com/embed/";
export const comment_api =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&key=" +
  API_KEY +
  "&videoId=";
export const replies_api =
  "https://www.googleapis.com/youtube/v3/comments?part=snippet&maxResults=50&key=" +
  API_KEY +
  "&parentId=";
