import Post from './Post/Post';
import incClass from './Posts.module.css';
import React from "react";
import {addPostsCreateAction,changePostsCreateAction} from '../../../redux/profile-reducer'
let Posts = (props)=>{
    let propsData = props.post.map(post => <Post img = {post.img} comment = {post.comment}/>)
    let refPost = React.createRef();
    let addPosts = ()=>{
        props.addPosts()
    }
    let changeNewPost = ()=>{
        let text = refPost.current.value;
        props.changeNewPost(text)
    }
    return(
      <div className={incClass.posts}>
          <div className={incClass.container}>
              <h2 className={incClass.title}>Posts</h2>
              <div className={incClass.forms}>
                  <div className={incClass.form}>
                      <textarea ref={refPost} onChange={changeNewPost} value={props.newPost}
                       className={incClass.inputClass} maxLength = '150' placeholder='Your comment...'/>
                      <div onClick={addPosts} className={incClass.buttonShell}>
                  <button  className='buttonSend'>Send</button>
              </div>
                  </div>
              </div>
          </div>
          <div className={incClass.flexReverse}>
            {propsData}
          </div>
      </div>
    )
}
export default Posts