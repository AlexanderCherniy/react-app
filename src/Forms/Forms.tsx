import {ErrorMessage, Field, FieldProps} from 'formik';
import incClass from '../components/Profile/Posts/Posts.module.scss'
type MyProps = {
    placeholder: string | undefined
    className: string
    children?: any
    form: FieldProps<any,any> | any//сделай так чтобы позже чтобы any не было
}
type ValidComponentArgType<V,FormValue> = FieldProps<V,FormValue> & MyProps;

export const ValidComponent:React.FC<ValidComponentArgType<any,any>> = ({field,form, placeholder, className, children, ...props})=>{
    return(
        <div className={incClass.postFlexContainer}>
            {children}
            <ErrorMessage className={incClass.errorLogin} name={children.props.name} component={'div'}/>
        </div>
    )
}
export const Textarea:React.FC<ValidComponentArgType<any,any>> = ({...props})=>{ //короче надо убрать field и form
    // из значений функции textarea, чтобы в props`ax оказались field и form, подумай как сделать
    return <ValidComponent {...props} ><textarea {...props.field} {...props}/></ValidComponent>
} 
export const Input:React.FC<ValidComponentArgType<any,any>> = ({...props})=>{
    return <ValidComponent {...props} ><input {...props.field} {...props}/></ValidComponent>
} 
export function createField<NameType = string>(className:string, name: NameType, component: React.FC<ValidComponentArgType<any,any>> ,
                            placeholder?: string ,type?: string  ){
    return <Field className={className} component={component} placeholder={placeholder} type={type} name={name} />
}