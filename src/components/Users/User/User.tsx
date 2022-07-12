import { NavLink } from 'react-router-dom'
import { UserType } from '../../../redux/GlobalTypes'
import classes from '../Users.module.scss'
import FollowUnFollowButtons from './FollowUnfollowButtons'
const noPhoto =
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
type Props = {
    usersState: Array<UserType> 
    isBlocked: Array<number>
    followUsers: (id: number) => void
    unfollowUsers: (id: number) => void
}
//@ts-ignore
const User: React.FC<Props> = props => {
    
    return (
        props.usersState.map((u: UserType) => {
            return (
                <div key={u.id} className={classes.user}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={classes.photo} src={u.photos.small === null ? noPhoto : u.photos.small} alt='userPhoto' />
                    </NavLink>
                    <div className={classes.AllUserInfo}>
                        <div className={classes.userInfo}>
                            <span className={classes.AllUserInfoItem}>ID: {u.id}</span>
                            <span className={classes.AllUserInfoItem}>Name: {u.name}</span>
                            <span className={classes.AllUserInfoItem}>Status: {u.status === null ? 'No Status :(' : u.status}</span>
                        </div>
                        <div>
                            <FollowUnFollowButtons u={u} {...props} />
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default User