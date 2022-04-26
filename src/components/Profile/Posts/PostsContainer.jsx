import React from "react";
import {addPostsCreateAction,changePostsCreateAction} from '../../../redux/profile-reducer'
import Posts from './Posts'
let PostsContainer = (props)=>{
    let addPosts = ()=>{
        props.store.dispatch(addPostsCreateAction())
        props.store.dispatch(changePostsCreateAction(""))
    }
    let changeNewPost = (text)=>{
        props.store.dispatch(changePostsCreateAction(text))
    }
    return(<Posts post = {props.store.getState().profilePage.post}
            addPosts = {addPosts} changeNewPost = {changeNewPost}
            newPost = {props.store.getState().profilePage.newPost}/>)
}
export default PostsContainer