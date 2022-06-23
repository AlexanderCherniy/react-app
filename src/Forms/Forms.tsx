import { ErrorMessage } from "formik"
import incClass from '../components/Profile/Posts/Posts.module.css'
export const ValidComponent = ({field,form, ...props}:any)=>{
    return(
        <div className={incClass.postFlexContainer}>
            {props.children}
            <ErrorMessage className={incClass.errorLogin} name={props.children.props.name} component={'div'}/>
        </div>
    )
}
export const Textarea = ({field,form, ...props}:any)=> <ValidComponent {...props} ><textarea {...field} {...props}/></ValidComponent>
export const Input = ({field,form, ...props}:any)=> <ValidComponent {...props} ><input {...field} {...props}/></ValidComponent>