import { UserType } from '../../../redux/users-reducer'
import classes from '../Users.module.scss'
type Props = {
    u: UserType
    isBlocked: number[]
    followUsers: (id: number)=> void
    unfollowUsers: (id:number)=> void
}
const FollowUnFollowButtons:React.FC<Props> = ({u, isBlocked, unfollowUsers, followUsers}) =>{
    return(
        u.followed === true
            ? <button disabled={isBlocked.some(id => id === u.id)} className={classes.unfollow} onClick={() => {
                unfollowUsers(u.id)
            }}>UNFOLLOWED</button>
            : <button disabled={isBlocked.some(id => id === u.id)} className={classes.follow} onClick={() => {
                followUsers(u.id)
        }}>FOLLOWED</button>
    )
}
export default FollowUnFollowButtons