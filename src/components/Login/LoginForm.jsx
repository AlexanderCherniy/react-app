import { Form, Field, Formik } from "formik"
import { Navigate } from "react-router-dom";
import { AuthApi } from "../../api/api-dal"
import { Input } from "../../Forms/Forms";
import { validateLogin } from "../../validate/validate";
import incClass from '../Profile/Posts/Posts.module.css'
const LoginForm = (props) => {
    const deleteError = () => {
        props.setError(null);
    }
    if (props.userData.email != null && props.userData.login != null) {
        return <Navigate to={'/profile'} />
    }
    return <Formik initialValues={{
        login: '',
        passoword: '',
        remebmerMe: false,
    }}
        validate={validateLogin}
        onSubmit={async values => {
            const data = await AuthApi.loginService(values.login, values.passoword, values.remebmerMe)
            if (data.resultCode === 0) {
                window.location.reload()
            } else {
                props.setError(...[data.messages]);
            }
        }}>
        <Form>
            <div>
                <Field component={Input} placeholder="login" type='text' name="login" />
            </div>
            <div>
                <Field component={Input} type='text' name="passoword" placeholder="password" />
            </div>
            <div>
                <Field component={Input} name="remebmerMe" type='checkbox' /> rememberMe
            </div>
            {props.error === null ? "" : <div className={incClass.errorLogin}>{props.error}</div>}
            <div>
                <button onBlur={deleteError} type="submit">GO FORM</button>
            </div>
        </Form>
    </Formik>
}
export default LoginForm