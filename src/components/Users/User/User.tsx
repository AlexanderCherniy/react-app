import { NavLink } from 'react-router-dom'
import { UserType } from '../../../redux/users-reducer'
import classes from '../Users.module.scss'
import FollowUnFollowButtons from './FollowUnfollowButtons'
const noPhoto =
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
type Props = {
    // usersState: UserType[]
    usersState: any
    isBlocked: number[]
    followUsers: (id: number) => void
    unfollowUsers: (id: number) => void
}
const User: React.FC<Props> = props => {
    return (
        props.usersState.map((u: UserType) => {
            return (
                <div key={u.id} className={classes.user}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={classes.photo} src={u.photos.small === null ? noPhoto : u.photos.small} alt='userPhoto' />
                    </NavLink>
                    <span>{u.id}</span>
                    <span>{u.name}</span>
                    <span>{u.status}</span>
                    <FollowUnFollowButtons u={u} {...props} />
                </div>
            )
        })
    )
}

export default User