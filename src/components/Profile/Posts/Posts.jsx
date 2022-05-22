import Post from './Post/Post';
import incClass from './Posts.module.css';
import React from "react";
import PostsForm from './PostsForm';
let Posts = (props)=>{
    let propsData = props.post.map(post => <Post key={post.id} img = {post.img} comment = {post.comment}/>)
    let refPost = React.createRef();
    let addPosts = ()=>{
        refPost.current.value !== '' ? props.addPosts() : console.log()
    }
    let changeNewPost = ()=>{
        let text = refPost.current.value;
        props.changeNewPost(text)
    }
    return(
      <div className={incClass.posts}>
          <div className={incClass.container}>
              <h2 className={incClass.title}>Posts</h2>
              <PostsForm {...props} changeNewPost = {props.changeNewPost} newPost = {props.newPost} addPostsProps = {props.addPosts}/>
          </div>
          <div className={incClass.flexReverse}>
            {propsData}
          </div>
      </div>
    )
}
export default Posts