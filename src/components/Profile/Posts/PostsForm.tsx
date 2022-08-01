import incClass from './Posts.module.scss';
import React from "react";
import { validatePost } from '../../../validate/validate';
import { Form, Formik } from "formik"
import { createField, Textarea } from '../../../Forms/Forms';
import { SendOutlined } from '@ant-design/icons';
const noPhoto =
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
type Props = {
    userData: UserData
    changeNewPost: (text: string) => void
    addPosts: (avatar: string) => void
}
export type UserData = {
    captcha: string | null
    email: string | null
    error: string | null | boolean
    id: number | null
    isAuth: boolean
    login: string | null
    photo: string | null
}
const initialValues = {
    newPost: ''
}
type initialValuesType = typeof initialValues
type initialValuesKeysType = keyof initialValuesType
const PostsForm: React.FC<Props> = (props) => {
    
    return <Formik initialValues={initialValues}
        validate={validatePost}
        onSubmit={values => {
            props.changeNewPost(values.newPost)
            props.addPosts(props.userData.photo === null ? noPhoto : props.userData.photo)
            values.newPost = ''
        }}
    >
        <Form style={window.innerWidth <= 1100 ? window.innerWidth <= 555 ? {marginBottom: 30} : {display: 'grid', gridTemplateColumns: '4fr 0.3fr', gap: 10, marginBottom: 10} : {display: 'grid', gridTemplateColumns: '4fr 0.3fr 1fr', gap: 10, marginBottom: 10}}>
            {createField<initialValuesKeysType>(incClass.PostInputForm, "newPost", Textarea, "Your comment...",)}
            <button type='submit' className={incClass.sendButton}><SendOutlined /></button>
        </Form>
    </Formik>
}
export default PostsForm