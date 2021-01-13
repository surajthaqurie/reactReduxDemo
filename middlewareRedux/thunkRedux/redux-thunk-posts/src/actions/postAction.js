import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, GET_POSTS } from "./types";
import axios from 'axios';


// Get all posts

// export const getPosts = () => ({
//   type: GET_POSTS,
//   payload: data
// });

// Step 3: With thunk function
export const getPosts = () => async (dispatch) => {

  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(result);
  dispatch({
    type: GET_POSTS,
    payload: result.data
  })
}

// get a post
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

// create a post
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

// update a post
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// delete a post
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
