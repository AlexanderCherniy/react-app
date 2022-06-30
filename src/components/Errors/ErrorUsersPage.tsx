import classes from '../Users/Users.module.css'
type Props = {
    error: boolean
    toggleErrorStatus: (status:boolean)=> void
}
const ErrorMassage:React.FC<Props> = props =>{
    if(props.error === true){
        setTimeout(()=>{
            props.toggleErrorStatus(false)
        },5000)
        return <div className={classes.error}>OOPS! ERROR OCCURRED, TRY AGAIN...</div> 
    }
    return <div></div>
}
export default ErrorMassage