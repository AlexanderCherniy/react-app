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
            }}><UserDeleteOutlined style={{fontSize: '24px', color:'rgb(240, 59, 59)', background: 'white'}}/></button>
            : <button disabled={isBlocked.some(id => id === u.id)} className={classes.follow} onClick={() => {
                followUsers(u.id)
        }}><UserAddOutlined style={{fontSize: '24px', color:'rgb(41, 181, 41)', background: 'white'}}/></button>
        
    )
}
export default FollowUnFollowButtons