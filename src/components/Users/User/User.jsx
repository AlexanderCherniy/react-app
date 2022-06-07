import { NavLink } from 'react-router-dom'
import classes from '../Users.module.css'
import FollowUnFollowButtons from './FollowUnfollowButtons'
const noPhoto =
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
const User = props => {
    return (
        props.usersState.map(u => {
            return (
                <div key={u.id} className={classes.user}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={classes.photo} src={u.photos.small === null ? noPhoto : u.photos.small} alt='userPhoto' />
                    </NavLink>
                    <span>{u.id}</span>
                    <span>{u.name}</span>
                    <span>{u.status}</span>
                    <FollowUnFollowButtons u = {u} {...props}/>
                </div>
            )
        })
    )
}

export default User