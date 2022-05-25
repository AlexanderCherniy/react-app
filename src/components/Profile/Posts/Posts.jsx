import React from "react";
import Post from './Post/Post';
import incClass from './Posts.module.css';
import PostsForm from './PostsForm';
let Posts = (props) => {
  let propsData = props.post.map(post => <Post key={post.id} img={post.img} comment={post.comment} />)
  return (
    <div className={incClass.posts}>
      <div className={incClass.container}>
        <h2 className={incClass.title}>Posts</h2>
        <PostsForm {...props} />
      </div>
      <div className={incClass.flexReverse}>
        {propsData}
      </div>
    </div>
  )
}
export default Posts