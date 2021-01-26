import { MOST_COMMENTED, POST_ERROR } from "../../../constants/posts.constants";
import axios from "axios";

export const getMostCommentedPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "api/posts/posts/the_most_commented"
    );
    dispatch({ type: MOST_COMMENTED, payload: res.data });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
