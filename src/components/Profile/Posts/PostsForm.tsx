import incClass from './Posts.module.css';
import React from "react";
import { validatePost } from '../../../validate/validate';
import {Form, Field, Formik} from "formik"
import { Textarea } from '../../../Forms/Forms';
const noPhoto =
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
type Props = {
    userData: any
    changeNewPost: (text:string)=> void
    addPosts: (avatar:string)=> void
}
const PostsForm:React.FC<Props> = (props)=>{
    return <Formik initialValues={{
        newPost:'',
    }}
    validate={validatePost}
    onSubmit = {values=>{
        props.changeNewPost(values.newPost)
        props.addPosts(props.userData.photo === null ? noPhoto : props.userData.photo )
        values.newPost = ''
    }}
    >
    <Form > 
        <Field className={incClass.PostInputForm}  placeholder="Your comment..." component={Textarea} name="newPost"/>
        <button type='submit' className={incClass.sendButton}>Send</button>
    </Form>
    </Formik>
}
export default PostsForm