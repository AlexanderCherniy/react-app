import React from 'react';
import incClass from '../../Profile.module.scss';
type Props = {
    statusTextProps: string
    itemProps: {
        userId: number
        fullName: string
        aboutMe: string | null
    }
    userDataProps:{
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
            {props.itemProps.userId === props.userDataProps.id
                ? props.changeText === false
                    ? <span className={incClass.statusText} onDoubleClick={props.addChangeText}>{props.statusTextProps}</span>
                    : <input ref={ref} autoFocus={true} onBlur={props.removeChangeText}
                        onChange={() => {props.changeTextFunc(ref)}} value={props.statusTextProps} />
                : <span>{props.itemProps.aboutMe !== null
                    ? props.itemProps.aboutMe
                    : `Я ${props.itemProps.fullName} и я крут :)`}</span>
            }
        </div>
    )
}
export default ProfileStatus
