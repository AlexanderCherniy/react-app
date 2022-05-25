import classes from '../Users.module.css'
const FollowUnFollowButtons = ({u, isBlocked, unfollowUsers, followUsers}) =>{
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