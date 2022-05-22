import classes from './Users.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
let noPhoto = 
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
const Users = props=>{
        let pagesCount = Math.ceil(props.totalCount / props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount;i++){
            pages.push(i)
        }
        let curP = props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);
        return(
            <div className={classes.users}>
            <div className="title">USERS</div>
            <div className={classes.numsContainer}>
            {slicedPages.map(p=>{
                return <span onClick={()=> {props.checkUsers(p)}} className={props.currentPage === p ? classes.activeNum : classes.noactiveNum}>
                    {p}
                </span>
            })}
            </div>
            <div className={classes.loaderContainer}>
            {props.loaderState === true ? <div className={classes.loaderSpin}></div> : ""}
            </div>
                {props.usersState.map(u=>{
                    return(
                    <div key={u.id} className={classes.user}>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={classes.photo} src={u.photos.small===null ? noPhoto : u.photos.small} alt='userPhoto'/>
                        </NavLink>
                        <span>{u.id}</span>
                        <span>{u.name}</span>
                        {u.followed === true 
                        ? <button disabled={props.isBlocked.some(id=> id === u.id)} className={classes.unfollow} onClick={()=> {
                            props.unfollowUsers(u.id)
                        }}>UNFOLLOWED</button>
                        : <button disabled={props.isBlocked.some(id=> id === u.id)} className={classes.follow} onClick={()=>{
                            props.followUsers(u.id)}}>FOLLOWED</button>}
                    </div>
                    )
                })}
            </div>
        )
   }
export default Users