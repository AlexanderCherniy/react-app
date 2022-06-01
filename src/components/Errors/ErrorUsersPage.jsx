import classes from '../Users/Users.module.css'

const ErrorMassage = props =>{
    if(props.error === true){
        setTimeout(()=>{
            props.toggleErrorStatus(false)
        },5000)
        return <div className={classes.error}>OOPS! ERROR OCCURRED, TRY AGAIN...</div> 
    }
}
export default ErrorMassage