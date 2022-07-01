import React from 'react';
import incClass from '../../Profile.module.scss';
type Props = {
    statusText: string
    item: {
        userId: number
        fullName: string
        aboutMe: string | null
    }
    userData:{
        id: number
    }
    changeText: boolean
    changeTextFunc: (ref:any)=> void
    addChangeText: ()=> void
    removeChangeText: ()=> void
}
const ProfileStatus:React.FC<Props> = (props) => {
    const ref = React.useRef<HTMLInputElement>(null)
    return (
        <div>
            <span className={incClass.status}>Status: </span>
            {props.item.userId === props.userData.id
                ? props.changeText === false
                    ? <span className={incClass.statusText} onDoubleClick={props.addChangeText}>{props.statusText}</span>
                    : <input ref={ref} autoFocus={true} onBlur={props.removeChangeText}
                        onChange={() => {props.changeTextFunc(ref)}} value={props.statusText} />
                : <span>{props.item.aboutMe !== null
                    ? props.item.aboutMe
                    : `Я ${props.item.fullName} и я крут :)`}</span>
            }
        </div>
    )
}
export default ProfileStatus
