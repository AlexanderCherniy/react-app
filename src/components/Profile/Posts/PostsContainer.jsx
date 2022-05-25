import { connect } from "react-redux";
import {addPostsCreateAction,changePostsCreateAction} from '../../../redux/profile-reducer'
import Posts from './Posts'
let mapStateToProps = (state)=>{
    return{
        post : state.profilePage.post,
        newPost : state.profilePage.newPost,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        changeNewPost : (text)=> dispatch(changePostsCreateAction(text)),
        addPosts : ()=> dispatch(addPostsCreateAction())
    }
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
export default PostsContainer