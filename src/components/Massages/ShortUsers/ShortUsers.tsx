import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/store-redux'
import SelectUsers from '../SelectUsers/SelectUsers'
import cn from './ShortUsers.module.scss'

type ShortUsersType = {
    userIdURL: number | string
    setUserIdUrl: Dispatch<SetStateAction<string | number>>
}

const ShortUsers: React.FC<ShortUsersType> = (props) => {
    const shortUsers = useSelector((state: AppState) => state.massagesPage.users.map((user) => <SelectUsers userIdURL={props.userIdURL} setUserIdUrl={props.setUserIdUrl} key={user.id} hasNewMessages={user.hasNewMessages}
    userPhoto={user.photos.small}
    userId={user.id} userName={user.userName} />))
    return (
        <div className={window.innerWidth <= 1300 ? window.innerWidth <= 990 ? window.innerWidth <= 750 ? cn.users750Width : cn.users990Width : cn.usersSmallWidth : cn.users}>
            {shortUsers}
        </div>
    )
}
export default ShortUsers