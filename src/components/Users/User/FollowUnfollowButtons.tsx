import { UserType } from '../../../redux/GlobalTypes'
import classes from '../Users.module.scss'
import {UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
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
            }}><UserDeleteOutlined style={{fontSize: '23px', color:'rgb(240, 59, 59)'}}/></button>
            : <button disabled={isBlocked.some(id => id === u.id)} className={classes.follow} onClick={() => {
                followUsers(u.id)
        }}><UserAddOutlined style={{fontSize: '23px', color:'rgb(41, 181, 41)'}}/></button>
        
    )
}
export default FollowUnFollowButtons