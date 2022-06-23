import { connect } from "react-redux";
import { addPostsCreateAction, changePostsCreateAction, checkPosts, deletePosts } from '../../../redux/profile-reducer'
import { AppState } from "../../../redux/store-redux";
import Posts from './Posts'
let mapStateToProps = (state: AppState) => {
    return {
        post: state.profilePage.post,
        newPost: state.profilePage.newPost,
        userData: state.auth
    }
}
let mapDispatchToProps = (dispatch: Function) => {
    return {
        changeNewPost: (text: string) => dispatch(changePostsCreateAction(text)),
        addPosts: (avatar: string) => dispatch(addPostsCreateAction(avatar)),
        deletePosts: async () => {
            await dispatch(deletePosts())
            dispatch(checkPosts())
        }
    }
}
//@ts-ignore
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer