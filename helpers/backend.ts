import axios from "axios";
import { WPPost } from "../types";
const wordpressUrl = "https://wp.voicl.com/wp-json/wp/v2";
export const getAllPosts = async () => {
  return (await axios.get(wordpressUrl + "/posts/")).data as WPPost[];
};

export const getPost = async (id: string) => {
  return (await axios.get(wordpressUrl + "/posts/" + id)).data as WPPost;
};
