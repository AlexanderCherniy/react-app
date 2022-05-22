import incClass from './Posts.module.css';
import React from "react";
import { validatePost } from '../../../validate/validate';
import {ErrorMessage,Form, Field, Formik} from "formik"
import { Textarea } from '../../../Forms/Forms';
const PostsForm = (props)=>{
    return <Formik initialValues={{
        newPost:'',
    }}
    validate={validatePost}
    onSubmit = {values=>{
        props.changeNewPost(values.newPost)
        values.newPost !== '' ? props.addPostsProps(props.newPost) : console.log()
    }}
    >
      <Form> 
        <Field className={incClass.inputClass}  placeholder="Your comment..." component={Textarea} type='text' name="newPost"/>
        <div className={incClass.buttonShell}>
            <button type='submit' className='buttonSend'>Send</button>
        </div>
    </Form>
    </Formik>
}
export default PostsForm