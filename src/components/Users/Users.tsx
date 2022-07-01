import classes from './Users.module.scss'
import React from 'react'
import User from './User/User'
import SlicedPages from './SlicedPages'
import ErrorMassage from '../Errors/ErrorUsersPage'
import { UserType } from '../../redux/users-reducer'

type Props = {
    error: boolean
    loaderState: boolean
    usersState: UserType[]
    isBlocked: number[]
    totalCount: number
    pageSize: number
    currentPage: number
    followUsers: (id:number)=> void
    unfollowUsers: (id:number)=> void
    toggleErrorStatus: (status:boolean)=> void
    checkUsers: (p:number)=> void
}
const Users:React.FC<Props> = props => {
    return (
        <div className={classes.users}>
            <div className="title">USERS</div>
                <ErrorMassage toggleErrorStatus={props.toggleErrorStatus} error={props.error}/>
            <div className={classes.numsContainer}>
            <SlicedPages totalCount={props.totalCount} pageSize={props.pageSize} 
                currentPage={props.currentPage} checkUsers={props.checkUsers}/>
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