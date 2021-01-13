import React, { useEffect } from "react";
import PostCard from "./PostCard";

// Step5: Import useDispatch
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from '../../actions/postAction';

const Posts = () => {
  // Step6 use of useDispatch function
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post.posts);
  
  useEffect(() => {
    // Step7 call the thunkfunction
    dispatch(getPosts);
  }, []); // [] empty for evertime infinte
  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
