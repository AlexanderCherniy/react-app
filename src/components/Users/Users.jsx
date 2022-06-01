import classes from './Users.module.css'
import React from 'react'
import User from './User/User'
import SlicedPages from './SlicedPages'
import ErrorMassage from '../Errors/ErrorUsersPage'
const Users = props => {
    return (
        <div className={classes.users}>
            <div className="title">USERS</div>
                {ErrorMassage(props)}
            <div className={classes.numsContainer}>
            <SlicedPages {...props}/>
            </div>
            <div className={classes.loaderContainer}>
                {props.loaderState === true ? <div className={classes.loaderSpin}></div> : ""}
            </div>
            <User isBlocked={props.isBlocked} usersState={props.usersState}
                followUsers={props.followUsers} unfollowUsers={props.unfollowUsers} />
        </div>
    )
}
export default Users