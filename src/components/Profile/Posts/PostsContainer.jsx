import { connect } from "react-redux";
import {addPostsCreateAction,changePostsCreateAction, checkPosts, deletePosts} from '../../../redux/profile-reducer'
import Posts from './Posts'
let mapStateToProps = (state)=>{
    return{
        post : state.profilePage.post,
        newPost : state.profilePage.newPost,
        userData: state.auth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        changeNewPost : (text)=> dispatch(changePostsCreateAction(text)),
        addPosts : (avatar)=> dispatch(addPostsCreateAction(avatar)),
        deletePosts: async ()=> {
            await dispatch(deletePosts())
            dispatch(checkPosts())
        }
    }
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
export default PostsContainer