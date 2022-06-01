import incClass from './Posts.module.css';
import React from "react";
import { validatePost } from '../../../validate/validate';
import {Form, Field, Formik} from "formik"
import { Textarea } from '../../../Forms/Forms';
const PostsForm = (props)=>{
    return <Formik initialValues={{
        newPost:'',
    }}
    validate={validatePost}
    onSubmit = {values=>{
        props.changeNewPost(values.newPost)
        props.addPosts(props.newPost)
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